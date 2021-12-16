<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Order</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs :items="items">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                {{ item.text.toUpperCase() }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Id</th>
                  <th class="text-left">Image</th>
                  <th class="text-left">Products</th>
                  <th width="70" class="text-left">Qty</th>
                  <th class="text-left">Price</th>
                  <th class="text-left">Total Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in products" :key="i.id">
                  <td>{{ item.id }}</td>
                  <td>
                    <v-img
                      width="50"
                      height="50"
                      :src="item.data.image"
                    ></v-img>
                  </td>
                  <td>{{ item.data.title }}</td>
                  <td>
                    <v-text-field v-model="item.data.qty"></v-text-field>
                  </td>
                  <td>$ {{ item.data.pricing }}</td>
                  <td>$ {{ item.data.pricing * item.data.qty }}</td>
                  <td width="50">
                    <v-btn
                      icon
                      x-small
                      fab
                      color="error"
                      @click="deleteItem(item.id)"
                    >
                      <v-icon> mdi-delete </v-icon>
                    </v-btn>
                  </td>
                </tr>

                <tr>
                  <td colspan="5" align="right"><b>Total</b></td>
                  <td>
                    $ <strong>{{ subtotal }}</strong>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row align="center" class="text-right">
        <v-col cols="12">
          <v-btn width="200" color="success">Bayar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({
    products: "",
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Cart",
        disabled: true
      }
    ]
  }),

  created() {
    this.$axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        this.products = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  computed: {
    subtotal() {
      return this.products.reduce((items, data) => {
        return items + data.data.pricing * data.data.qty;
      }, 0);
    }
  },

  methods: {
    deleteItem(id) {
      this.$axios
        .delete("http://localhost:3000/cart/" + id)
        .then(() => {
          this.$axios
            .get("http://localhost:3000/cart")
            .then((response) => {
              this.products = response.data;
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

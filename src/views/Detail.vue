<template>
  <div>
    <v-container>
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
        <v-col cols="12" md="6">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/12"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h1>Judul Barang</h1>
          <p>Rp 3000</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est et
            cumque natus veniam nam, dolor, deserunt deleniti veritatis,
            voluptate sint ad. Maxime ut tenetur ad mollitia enim nobis quam.
          </p>
          <v-btn color="success">Buy</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ButtonCart />
  </div>
</template>

<script>
import ButtonCart from "@/components/TheButtonCart.vue";
export default {
  components: {
    ButtonCart
  },
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/"
      },
      {
        text: "Details",
        disabled: true
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>

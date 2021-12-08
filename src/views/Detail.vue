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
            max-height="300"
            lazy-src="https://picsum.photos/id/11/10/12"
            :src="data.image"
            aspect-ratio="1"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h1>{{ data.title }}</h1>
          <p class="title">{{ data.pricing }}</p>
          <p>
            {{ data.description }}
          </p>
          <v-btn color="primary">Buy</v-btn>
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
    ],
    data: ""
  }),
  created() {
    this.$axios
      .get(`http://localhost:3000/products?id=${this.$route.params.id}`)
      .then((response) => (this.data = response.data[0]))
      .catch(function (error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped></style>

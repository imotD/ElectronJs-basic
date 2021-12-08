<template>
  <v-container>
    <v-row class="py-10">
      <v-col cols="12" sm="4" v-for="(img, i) in data" :key="i.id">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 16 : 2">
            <v-img
              :src="`https://picsum.photos/500/300?image=${i + i}`"
              :lazy-src="`https://picsum.photos/10/6?image=${i + i}`"
              aspect-ratio="1"
              class="green lighten-2 white--text align-end"
              gradient="to bottom, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            >
              <v-card-title v-text="img.title"></v-card-title>
              <v-card-subtitle>
                {{ img.pricing }}
              </v-card-subtitle>

              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-card-text>
                  <v-btn
                    :to="`/product/${img.id}`"
                    class="mx-2"
                    fab
                    dark
                    large
                    color="primary"
                    title="Detail Product"
                  >
                    <v-icon dark> mdi-store-search-outline </v-icon>
                  </v-btn>
                </v-card-text>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
          circle
          color="green"
        ></v-pagination>
      </v-col>
    </v-row> -->
    <v-fab-transition>
      <v-btn color="green" dark fixed bottom right fab large>
        <v-badge overlap :content="badgeNumber">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    data: "",
    badgeNumber: "",
    page: 1
  }),
  created() {
    this.$axios
      .get("http://localhost:3000/cart")
      .then((response) => (this.badgeNumber = response.data.length))
      .catch(function (error) {
        console.log(error);
      });
    this.$axios
      .get("http://localhost:3000/products")
      .then((response) => (this.data = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
  mounted() {},
  methods: {
    addCard(data) {
      console.log(data);
      // this.$axios
      //   .post("http://localhost:3000/cart", {
      //     data
      //   })
      //   .then((response) => console.log(response))
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>

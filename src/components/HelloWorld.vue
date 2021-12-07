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
              class="grey lighten-2"
            >
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
              <v-overlay
                @click="addCard(img)"
                v-if="hover"
                absolute
                color="#036358"
                style="cursor: pointer"
              >
                {{ img.title }}
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
    badgeNumber: 0,
    page: 1
  }),
  mounted() {
    this.$axios
      .get("http://localhost:3000/products")
      .then((response) => (this.data = response.data))
      .catch(function (error) {
        console.log(error);
      });

    this.$axios
      .get("http://localhost:3000/cart")
      .then((response) => (this.badgeNumber = response.data.length))
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    addCard(data) {
      this.$axios
        .post("http://localhost:3000/cart", {
          data
        })
        .then((response) => console.log(response))
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>

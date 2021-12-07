<template>
  <v-container>
    <h1>My Album</h1>
    <v-row class="py-10">
      <v-col cols="4" v-for="n in 9" :key="n">
        <v-hover v-slot="{ hover }">
          <v-card :elevation="hover ? 16 : 2">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn>See more info</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    data: "",
    // overlay: false
  }),
  mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => (this.data = response.data));
  }
};
</script>

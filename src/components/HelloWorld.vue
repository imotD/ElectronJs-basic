<template>
  <v-container>
    <h1>Hai World</h1>
    {{ data }}
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    data: ""
  }),
  mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.data = response.data));
  }
};
</script>

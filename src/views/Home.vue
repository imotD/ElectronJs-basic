<template>
  <div>
    <navbar />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Navbar from "../components/TheNavbar.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    Navbar
  }
};
</script>

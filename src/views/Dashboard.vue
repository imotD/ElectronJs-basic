<template>
  <div>
    <Navbar />
    <Products />
  </div>
</template>

<script>
import Products from "../components/Products";
import Navbar from "../components/Navbar";

export default {
  name: "Dashboard",
  components: {
    Products,
    Navbar
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

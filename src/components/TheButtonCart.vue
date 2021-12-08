<template>
  <div>
    <v-fab-transition>
      <v-btn
        v-if="items"
        to="/order"
        color="green"
        dark
        fixed
        bottom
        right
        fab
        large
      >
        <v-badge overlap :content="items">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-else to="/order" color="green" dark fixed bottom right fab large>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  props: {
    items: { Number, String }
  },
  data() {
    return {
      number: false
    };
  }
};
</script>

<style lang="scss" scoped></style>

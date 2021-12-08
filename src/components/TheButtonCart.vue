<template>
  <div>
    <v-fab-transition>
      <v-btn color="green" dark fixed bottom right fab large>
        <v-badge overlap :content="badgeNumber">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

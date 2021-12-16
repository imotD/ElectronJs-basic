<template>
  <div>
    <v-container>
      <v-row>
        <v-card class="mx-auto my-12 pa-10" max-width="374">
          <v-card-title class="mx-auto">Login</v-card-title>

          <v-card-text>
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="password" type="password" label="Password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="handelLogin" color="primary"> Login </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async handleLogin() {
      await this.$axios
      .post('')
      
    }
  },
};
</script>

<style lang="scss" scoped></style>

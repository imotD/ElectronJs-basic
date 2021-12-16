<template>
  <div>
    <v-container>
      <v-row>
        <v-card class="mx-auto my-12 pa-10" max-width="374">
          <v-card-title class="mx-auto">Register</v-card-title>

          <v-form>
            <v-text-field
              v-model="first_name"
              label="First Name"
            ></v-text-field>
            <v-text-field v-model="last_name" label="Last Name"></v-text-field>

            <v-text-field v-model="email" label="E-mail"></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              label="Password"
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="password_confirm"
              label="Confirm Password"
            ></v-text-field>

            <v-btn @click="handleSubmit()" color="success" class="mr-4">
              Submit
            </v-btn>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: ""
    };
  },
  methods: {
    async handleSubmit() {
      await this.$axios
        .post("http://localhost:3000/register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm
        })
        .then(() => {
          console.log("Terkirim");
          this.$route.push("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

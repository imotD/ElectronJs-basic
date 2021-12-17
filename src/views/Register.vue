<template>
  <div>
    <v-container>
      <v-row>
        <v-card class="mx-auto my-12 pa-10" max-width="374">
          <v-card-title class="mx-auto">Register</v-card-title>

          <v-form @submit.prevent="handleSubmit">
            <!-- <v-text-field
              v-model="first_name"
              label="First Name"
            ></v-text-field>
            <v-text-field v-model="last_name" label="Last Name"></v-text-field> -->

            <v-text-field v-model="email" label="E-mail"></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              label="Password"
            ></v-text-field>

            <!-- <v-text-field
              type="password"
              v-model="password_confirm"
              label="Confirm Password"
            ></v-text-field> -->

            <v-btn type="submit" color="success" class="mr-4"> Submit </v-btn>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      error: ""
    };
  },
  methods: {
    handleSubmit() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$route.push("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorCode);
          console.log(errorMessage);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

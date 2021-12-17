<template>
  <div>
    <v-container>
      <v-row>
        <v-card class="mx-auto my-12 pa-10" max-width="374">
          <v-card-title class="mx-auto">Login</v-card-title>

          <v-card-text>
            <v-text-field v-model="email" label="E-mail"></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="handleLogin()" color="primary"> Login </v-btn>
          </v-card-actions>
          <v-card-text>
            Need an Account ? <router-link to="/register">Sign Up</router-link>
            <br />
            <router-link to="/recovery">Forgot Password?</router-link>
          </v-card-text>
          <v-card-text> </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

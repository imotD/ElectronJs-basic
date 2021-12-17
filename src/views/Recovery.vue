<template>
  <div>
    <v-container>
      <v-row>
        <v-card class="mx-auto my-12 pa-10" max-width="374">
          <v-card-title class="mx-auto">Let's get you signed in </v-card-title>

          <v-form @submit.prevent="resetPassword">
            <v-text-field v-model="email" label="E-mail"></v-text-field>

            <v-btn type="submit" color="success" class="mr-4"> Send </v-btn>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  name: "recovery",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    resetPassword() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          alert(`succes send to ${this.email}`);
          this.$router.push("/login");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

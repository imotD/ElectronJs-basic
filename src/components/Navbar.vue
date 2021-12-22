<template>
  <div>
    <v-container>
      <v-row>
        <v-toolbar color="green" dark prominent>
          <v-toolbar-title>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            {{ name }}
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="logout()">
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </v-row>
      <v-row class="my-6">
        <v-chip class="mr-2" color="orange" to="/dashboard/contact">
          <v-icon left> mdi-note-edit-outline </v-icon>
          Add Contact
        </v-chip>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "Navbar",
  data() {
    return {
      name: ""
    };
  },

  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.name = user.email;
      }
    });
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("succes");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar dark prominent>
            <v-toolbar-title>{{ name }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="logout()">
              <v-icon>mdi-export</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Navbar",
  data() {
    return {
      name: ""
    };
  },

  created() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const email = user.email;
      this.name = email;
    }
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

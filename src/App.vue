<template>
  <v-app style="-webkit-app-region: drag">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent=""
      color="#2c3a47"
      dark
      app
    >
      <v-list-item class="px-2 pt-1">
        <v-list-item-avatar>
          <img src="../src/assets/watch.png" alt="John" class="mx-auto" />
        </v-list-item-avatar>
        <v-list-item-title class="ml-4 text-capitalize">
          WatchJaya Serang
        </v-list-item-title>
      </v-list-item>

      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="orange--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route
              to="child.route"
              active-class="orange--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content
                >= !mini
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="item.text"
            active-class="orange--text"
            route
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#2c3a47" dark>
      <v-app-bar-nav-icon @click.stop="mini = !mini" class="clickable">
      </v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">AnicronApp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-on:click="logout" class="clickable">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="scroll-y" fluid>
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
    <v-btn
      v-scroll="onScroll"
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="toTop"
      class="clickable"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    mini: false,
    fab: false,
    items: [
      {
        icon: "mdi-home",
        text: "Dahsboard",
        route: "/"
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-cart-arrow-right",
        text: "Orders",
        mode: false,
        children: [
          { icon: "style", text: "Type", route: "/Type" },
          { icon: "atm", text: "Mark", route: "/Mark" }
        ]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-google-maps",
        text: "Tracking",
        mode: false,
        children: [
          { icon: "mdi-tooltip-account", text: "Locate", route: "/locate" },
          { icon: "mdi-printer", text: "Print", route: "/print" }
        ]
      },
      {
        icon: "mdi-finance",
        text: "Revenue",
        route: "/revenue"
      },
      {
        icon: "mdi-chart-pie",
        text: "Analytics",
        route: "/chart"
      },
      {
        icon: "mdi-magnify",
        text: "Search",
        route: "/recherches"
      }
    ]
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYoffet || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style scoped>
.clickable {
  -webkit-app-region: no-drag;
}
::-webkit-scrollbar {
  /* width: 12px; */
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>

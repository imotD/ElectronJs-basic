import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import { getAuth } from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard/",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      authRequired: true
    },
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/recovery/",
    name: "Recovery",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      authRequired: true
    },
    component: () =>
      import(/* webpackChunkName: "Recovery" */ "../views/Recovery.vue")
  },
  {
    path: "/login/",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  },
  {
    path: "/register/",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Register.vue")
  },
  {
    path: "/product/:id",
    name: "Detail",
    meta: {
      authRequired: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Detail.vue")
  },
  {
    path: "/cart/",
    name: "Cart",
    meta: {
      authRequired: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Cart" */ "../views/Cart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.authRequired)) {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       next();
//     } else {
//       alert("You must be logged in to see this page");
//       next({
//         path: "/"
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;

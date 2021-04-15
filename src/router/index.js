import Vue from "vue";
import VueRouter from "vue-router";
import StudentHome from "../views/StudentHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/student",
    name: "StudentHome",
    component: StudentHome,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TeacherHome.vue"),
  },
  {
    path: "/academic",
    name: "Academic",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AcademicHome.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

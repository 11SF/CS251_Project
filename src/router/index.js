import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // Student Path
  {
    path: "/student",
    name: "StudentHome",
    component: () => import("../views/Student/StudentHome.vue"),
  },
  {
    path: "/student/gradeview",
    name: "GradeView",
    component: () => import("../views/Student/GradeView.vue"),
  },
  {
    path: "/student/information",
    name: "StudentInformation",
    component: () => import("../views/Student/Information.vue"),
  },
  {
    path: "/student/score",
    name: "Score",
    component: () => import("../views/Student/ScorePerSubject.vue"),
  },
  {
    path: "/student/teacherinfo",
    name: "TeacherInfo",
    component: () => import("../views/Student/TeacherInfo.vue"),
  },
  {
    path: "/student/vote",
    name: "VoteTeacher",
    component: () => import("../views/Student/VoteTeacher.vue"),
  },
  // Teacher Path
  {
    path: "/teacher",
    name: "Teacher",
    component: () => import("../views/Teacher/TeacherHome.vue"),
  },
  {
    path: "/teacher/score",
    name: "TeacherScore",
    component: () => import("../views/Teacher/EditScore.vue"),
  },
  {
    path: "/teacher/information",
    name: "TeacherInformation",
    component: () => import("../views/Teacher/Information.vue"),
  },
  {
    path: "/teacher/studentview",
    name: "StudentView",
    component: () => import("../views/Teacher/StudentView.vue"),
  },
  //Academic Path
  {
    path: "/academic",
    name: "Academic",
    component: () => import("../views/Academic/AcademicHome.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

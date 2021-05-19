import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    name: "TeacherHome",
    component: () => import("../views/Teacher/TeacherHome.vue"),
  },
  {
    path: "/teacher/subject",
    name: "TeacherScore",
    component: () => import("../views/Teacher/EditScore.vue"),
  },
  {
    path: "/teacher/subject/editScore",
    name: "AssignScore",
    component: () => import("../views/Teacher/AssignScore.vue"),
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
  {
    path: "/teacher/studentview/information",
    name: "Student",
    component: () => import("../views/Teacher/Student.vue"),
  },
  //Academic Path
  {
    path: "/academic",
    name: "AcademicHome",
    component: () => import("../views/Academic/AcademicHome.vue"),
  },
  {
    path: "/academic/ClassView",
    name: "ClassView",
    component: () => import("../views/Academic/ClassView.vue"),
  },
  // {
  //   path: "/academic/EditInformation",
  //   name: "EditInformation",
  //   component: () => import("../views/Academic/EditInformation.vue"),
  // },
  {
    path: "/academic/Information",
    name: "AcademicInformation",
    component: () => import("../views/Academic/Information.vue"),
  },
  {
    path: "/academic/SubjectView",
    name: "SubjectView",
    component: () => import("../views/Academic/SubjectView.vue"),
  },
  {
    path: "/academic/TeacherTime",
    name: "TeacherTime",
    component: () => import("../views/Academic/TeacherTime.vue"),
  },
  {
    path: "/academic/TeacherView",
    name: "TeacherView",
    component: () => import("../views/Academic/TeacherView.vue"),
  },
  {
    path: "/loginAcademic",
    name: "AcademicLogin",
    component: () => import("../views/LoginAcademic.vue"),
  },
  {
    path: "/academic/setting",
    name: "Setting",
    component: () => import("../views/Academic/Setting.vue"),
  },
  {
    path: "/academic/class",
    name: "Class",
    component: () => import("../views/Academic/Class.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

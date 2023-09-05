import { createRouter, createWebHistory } from "vue-router";
import isUserValid from "./authChecker";
import Body from "../components/body";
import Default from "../pages/dashboard/view.vue";
import login from "@/auth/login.vue";
import register from "@/auth/register.vue";
import notfoound from "@/auth/404.vue";
import courses from "@/pages/course/courses.vue";
import branches from "@/pages/branche/branches.vue";
import schedule from "@/pages/schedul/schedule.vue";
import group from "@/pages/group/group.vue";
import groupInfo from "@/pages/group/groupInfo.vue";
import branchInfo from "@/pages/branche/branchInfo.vue";
import branchCreate from "@/pages/branche/create.vue";
import createCourse from "@/pages/course/create.vue";
import courseEdit from "@/pages/course/courseEdit.vue";
import student from "@/pages/student/students.vue";
import createGroup from "@/pages/group/create.vue";
import teachers from "@/pages/teachers/teachers.vue";
import studentCreate from "@/pages/student/create.vue";
import studentInfo from "@/pages/student/studentInfo.vue";
import teachersInfo from "@/pages/teachers/teachersInfro.vue";
import teachersCreate from "@/pages/teachers/create.vue";
import Decode from "./experitionChecker";
import payme from "@/pages/payme/payme.vue";
import forgot from "@/auth/forgot.vue";
import live from "@/pages/live/live.vue";
import profile from "@/pages/profile/profile.vue";
import getPropertiesGreaterThanZero from "@/router/roleChecker";
import myCourses from "@/pages/course/myCourses.vue";
import allCourses from "@/pages/course/allCourses";
import myChildren from '@/pages/student/myChildren.vue'
import myGroups from '@/pages/group/myGroups.vue'


let roleObj = JSON.parse(localStorage.getItem("role"));
let showObj = JSON.parse(localStorage.getItem("show"));

const routes = [
  {
    path: "/",
    component: Body,
    meta: { requiredAuth: true },
    children: [
      {
        path: "",
        name: "defaultRoot",
        component: Default,
        meta: { requiredAuth: true },
        beforeEnter: (to, from, next) => {
          if (showObj[0].window === "default") {
            // const nameWithoutSpaces = showObj[0].name.replace(/\s+/g, "");
            next(`/${showObj[0].name}`);
          } else {
            next();
          }
        },
      },
      {
        path: "courses",
        component: courses,
        meta: { requiredAuth: true },
      },
      {
        path: "courses/create",
        component: createCourse,
        meta: { requiredAuth: true },
      },
      {
        path: "courseInfo/:id",
        component: courseEdit,
        meta: { requiredAuth: true },
      },
      {
        path: "branches",
        component: branches,
        meta: { requiredAuth: true },
      },
      {
        path: "branchInfo/:id",
        component: branchInfo,
        meta: { requiredAuth: true },
      },
      {
        path: "branch/create",
        component: branchCreate,
        meta: { requiredAuth: true },
      },
      {
        path: "schedule",
        component: schedule,
        meta: { requiredAuth: true },
      },
      {
        path: "group",
        component: group,
        meta: { requiredAuth: true },
      },
      {
        path: "group/:id",
        component: groupInfo,
        meta: { requiredAuth: true },
      },
      {
        path: "group/create",
        component: createGroup,
        meta: { requiredAuth: true },
      },
      {
        path: "student",
        component: student,
        meta: { requiredAuth: true },
      },
      {
        path: "student/create",
        component: studentCreate,
        meta: { requiredAuth: true },
      },
      {
        path: "student/:id",
        component: studentInfo,
        meta: { requiredAuth: true },
      },
      {
        path: "teachers",
        component: teachers,
        meta: { requiredAuth: true },
      },
      {
        path: "teachers/create",
        component: teachersCreate,
        meta: { requiredAuth: true },
      },
      {
        path: "teachers/:id",
        component: teachersInfo,
        meta: { requiredAuth: true },
      },
      {
        path: "payme",
        component: payme,
        meta: { requiredAuth: true },
      },
      {
        path: "live",
        component: live,
        meta: { requiredAuth: true },
      },
      {
        path: "profile",
        component: profile,
        meta: { requiredAuth: true },
      },
      {
        path: "my-courses",
        component: myCourses,
        meta: { requiredAuth: true },
      },
      {
        path: "all-courses",
        component: allCourses,
        meta: { requiredAuth: true },
      },
      {
        path: "my-groups",
        component: myGroups,
        meta: { requiredAuth: true },
      },
      {
        path: "my-children",
        component: myChildren,
        meta: { requiredAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login page",
    component: login,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/forgotpassword",
    component: forgot,
  },
  {
    path: "/:pathMatch(.*)*",
    component: notfoound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  getPropertiesGreaterThanZero(roleObj);
  // console.log(showObj[0].window);
  if (to.meta.requiredAuth) {
    if (!isUserValid()) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
  Decode();
});

export default router;

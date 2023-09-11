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
import myCourses from "@/pages/course/myCourses.vue";
import allCourses from "@/pages/course/allCourses";
import myChildren from "@/pages/student/myChildren.vue";
import myGroups from "@/pages/group/myGroups.vue";
import addrole from "@/pages/role/addRole.vue";

let permObj = JSON.parse(localStorage.getItem("permissions"));
// console.log(defaultTrueObjects);
const routes = [
  {
    path: "/",
    component: Body,
    meta: { requiredAuth: true, unique: true },
    children: [
      {
        path: "",
        name: "defaultRoot",
        component: Default,
        meta: { requiredAuth: true },
        beforeEnter: (to, from, next) => {
          let defaultTrueObjects = permObj.filter((item) => item.default === true);
          if (defaultTrueObjects.length > 0) {
            next(defaultTrueObjects[0].name);
          } else {
            next("/:pathMatch(.*)*");
          }
        },
      },
      {
        path: "statistics",
        component: Default,
        meta: { requiredAuth: true,  },
      },
      {
        path: "courses",
        component: courses,
        meta: { requiredAuth: true, key: "courses" },
      },
      {
        path: "courses/create",
        component: createCourse,
        meta: { requiredAuth: true, key: "courses" },
      },
      {
        path: "courseInfo/:id",
        component: courseEdit,
        meta: { requiredAuth: true, key: "courses" },
      },
      {
        path: "branches",
        component: branches,
        meta: { requiredAuth: true, key: "branches" },
      },
      {
        path: "branchInfo/:id",
        component: branchInfo,
        meta: { requiredAuth: true, key: "branches" },
      },
      {
        path: "branch/create",
        component: branchCreate,
        meta: { requiredAuth: true, key: "branches" },
      },
      {
        path: "schedule",
        component: schedule,
        meta: { requiredAuth: true, key: "schedules" },
      },
      {
        path: "group",
        component: group,
        meta: { requiredAuth: true, key: "groups" },
      },
      {
        path: "group/:id",
        component: groupInfo,
        meta: { requiredAuth: true, key: "groups" },
      },
      {
        path: "group/create",
        component: createGroup,
        meta: { requiredAuth: true, key: "groups" },
      },
      {
        path: "student",
        component: student,
        meta: { requiredAuth: true, key: "students" },
      },
      {
        path: "student/create",
        component: studentCreate,
        meta: { requiredAuth: true, key: "students" },
      },
      {
        path: "student/:id",
        component: studentInfo,
        meta: { requiredAuth: true, key: "students" },
      },
      {
        path: "teachers",
        component: teachers,
        meta: { requiredAuth: true, key: "teachers" },
      },
      {
        path: "teachers/create",
        component: teachersCreate,
        meta: { requiredAuth: true, key: "teachers" },
      },
      {
        path: "teachers/:id",
        component: teachersInfo,
        meta: { requiredAuth: true, key: "teachers" },
      },
      {
        path: "payme",
        component: payme,
        meta: { requiredAuth: true, unique: true },
      },
      {
        path: "live",
        component: live,
        meta: { requiredAuth: true, unique: true },
      },
      {
        path: "profile",
        component: profile,
        meta: { requiredAuth: true, unique: true },
      },
      {
        path: "my-courses",
        component: myCourses,
        meta: { requiredAuth: true, key: "my-courses" },
      },
      {
        path: "all-courses",
        component: allCourses,
        meta: { requiredAuth: true, key: "all-courses" },
      },
      {
        path: "my-groups",
        component: myGroups,
        meta: { requiredAuth: true, key: "my-groups" },
      },
      {
        path: "my-children",
        component: myChildren,
        meta: { requiredAuth: true, key: "my-children" },
      },
      {
        path: "add-role",
        component: addrole,
        meta: { requiredAuth: true, key: "roles" },
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
  if (to.meta.requiredAuth) {
    if (!isUserValid()) {
      next("/login");
    } else {
      next();
      // console.log(permObj);
      // if (roleObj[to.meta.key]) {
      //   if (roleObj[to.meta.key] >= 1) {
      //     next();
      //   } else {
      //     next("/:pathMatch(.*)*");
      //   }
      // } else if (roleObj[to.meta.key]) {
      //   if (roleObj[to.meta.key] === 0) {
      //     next();
      //   } else {
      //     next("/:pathMatch(.*)*");
      //   }
      // } else if (to.meta.unique) {
      //   if (to.meta.unique === true) {
      //     next();
      //   } else {
      //     next("/:pathMatch(.*)*");
      //   }
      // } else {
      //   next("/:pathMatch(.*)*");
      // }
    }
  } else {
    next();
  }
  Decode();
});

export default router;

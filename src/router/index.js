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

const routes = [
  // let defaultTrueObjects = permObj.filter((item) => item.default === true)
  {
    path: "/",
    component: Body,
    meta: { requiredAuth: true },
    children: [
      {
        path: "",
        name: "defaultRoot",
        component: Default,
        meta: { requiredAuth: true, value: true },
        beforeEnter: (to, from, next) => {
          var defaultTrueObjects = permObj.filter(
            (item) => item.default === true
          );
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
        meta: {
          requiredAuth: true,
          // key: permObj[0].name,
          value: permObj[0].value,
        },
      },
      {
        path: "courses",
        component: courses,
        meta: { requiredAuth: true, value: permObj[9].value },
      },
      {
        path: "courses/create",
        component: createCourse,
        meta: { requiredAuth: true, value: permObj[9].value },
      },
      {
        path: "courseInfo/:id",
        component: courseEdit,
        meta: { requiredAuth: true, value: permObj[9].value },
      },
      {
        path: "branches",
        component: branches,
        meta: { requiredAuth: true, value: permObj[15].value },
      },
      {
        path: "branchInfo/:id",
        component: branchInfo,
        meta: { requiredAuth: true, value: permObj[15].value },
      },
      {
        path: "branch/create",
        component: branchCreate,
        meta: { requiredAuth: true, value: permObj[15].value },
      },
      {
        path: "schedule",
        component: schedule,
        meta: { requiredAuth: true, value: permObj[17].value },
      },
      {
        path: "group",
        component: group,
        meta: { requiredAuth: true, value: permObj[11].value },
      },
      {
        path: "group/:id",
        component: groupInfo,
        meta: { requiredAuth: true, value: permObj[11].value },
      },
      {
        path: "group/create",
        component: createGroup,
        meta: { requiredAuth: true, value: permObj[11].value },
      },
      {
        path: "student",
        component: student,
        meta: { requiredAuth: true, value: permObj[12].value },
      },
      {
        path: "student/create",
        component: studentCreate,
        meta: { requiredAuth: true, value: permObj[12].value },
      },
      {
        path: "student/:id",
        component: studentInfo,
        meta: { requiredAuth: true, value: permObj[12].value },
      },
      {
        path: "teachers",
        component: teachers,
        meta: { requiredAuth: true, value: permObj[8].value },
      },
      {
        path: "teachers/create",
        component: teachersCreate,
        meta: { requiredAuth: true, value: permObj[8].value },
      },
      {
        path: "teachers/:id",
        component: teachersInfo,
        meta: { requiredAuth: true, value: permObj[8].value },
      },
      {
        path: "payme",
        component: payme,
        meta: { requiredAuth: true, value: true },
      },
      {
        path: "live",
        component: live,
        meta: { requiredAuth: true, value: permObj[2].value },
      },
      {
        path: "profile",
        component: profile,
        meta: { requiredAuth: true, value: true },
      },
      {
        path: "my-courses",
        component: myCourses,
        meta: { requiredAuth: true, value: permObj[3].value },
      },
      {
        path: "all-courses",
        component: allCourses,
        meta: { requiredAuth: true, value: permObj[5].value },
      },
      {
        path: "my-groups",
        component: myGroups,
        meta: { requiredAuth: true, value: permObj[1].value },
      },
      {
        path: "my-children",
        component: myChildren,
        meta: { requiredAuth: true, value: permObj[2].value },
      },
      {
        path: "add-role",
        component: addrole,
        meta: { requiredAuth: true, value: permObj[6].value },
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
      // next();
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
      // console.log(to.meta.value);
      if (to.meta.value) {
        if (to.meta.value === true) {
          next();
        } else if (to.meta.value > 0) {
          next();
        } else {
          next("/:pathMatch(.*)*");
        }
      } else {
        next("/:pathMatch(.*)*");
      }
    }
  } else {
    next();
  }
  Decode();
});

export default router;

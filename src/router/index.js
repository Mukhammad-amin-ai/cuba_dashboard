import { createRouter, createWebHistory } from "vue-router";
// import isUserValid from "./authChecker";
import Body from "../components/body";
import Default from "../pages/dashboard/defaultPage.vue";
import login from "@/auth/login.vue";
import register from "@/auth/register.vue";
import notfoound from "@/auth/404.vue";
import courses from "@/pages/course/courses.vue";
import branches from "@/pages/branche/branches.vue";
import schedule from "@/pages/schedul/schedule.vue";
import group from "@/pages/group/group.vue";
import groupInfo from "@/pages/group/groupInfo.vue";

import branchInfo from "@/pages/branche/branchInfo.vue";
import branchCreate from '@/pages/branche/create.vue'
import createCourse from "@/pages/course/create.vue";
import courseEdit from '@/pages/course/courseEdit.vue'
import student from '@/pages/student/students.vue'
import createGroup from '@/pages/group/create.vue'
import teachers from '@/pages/teachers/teachers.vue'
import studentCreate from '@/pages/student/create.vue'
import studentInfo from '@/pages/student/studentInfo.vue'
import teachersInfo from '@/pages/teachers/teachersInfro.vue'

const routes = [
  {
    path: "/",
    component: Body,
    children: [
      {
        path: "",
        name: "defaultRoot",
        component: Default,
      },
      {
        path: "courses",
        component: courses,
      },
      {
        path: "courses/create",
        component: createCourse,
      },
      {
        path: "courseInfo/:id",
        component: courseEdit,
      },
      {
        path: "branches",
        component: branches,
      },
      {
        path: "branchInfo/:id",
        component: branchInfo,
      },
      {
        path: "branch/create",
        component: branchCreate,
      },
      {
        path: "schedule",
        component: schedule,
      },
      {
        path: "group",
        component: group,
      },
      {
        path: "group/:id",
        component: groupInfo,
      },
      {
        path: "group/create",
        component: createGroup,
      },
      {
        path: "student",
        component: student,
      },
      {
        path: "student/create",
        component: studentCreate,
      },
      {
        path: "student/:id",
        component: studentInfo,
      },
      {
        path: "teachers",
        component: teachers,
      },
      {
        path: "teachers/:id",
        component: teachersInfo,
      }
    ],
    meta: { requiredAuth: true },
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/:pathMatch(.*)*",
    component: notfoound,
    // meta: { requiredAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // if (to.meta.requiredAuth && !isUserValid()) {
  //   next("/login");
  // } else {
  //   next();
  // }
  next();
});
// router.beforeEach((to, from, next)=> {
//   // Check if the route parameters or query has changed
//     location.reload();
//     next()
//   // if (to.params.someParam !== from.params.someParam || to.query.someQuery !== from.query.someQuery) {
//   //   // Trigger a page reload
//   //   location.reload();
//   // } else {
//   //   // Continue with the normal navigation
//   //   next();
//   // }
// })

export default router;

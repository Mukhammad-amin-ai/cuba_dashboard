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
import user from "@/pages/user/user.vue";
import userCrete from '@/pages/user/userCrete.vue'
import userInfo from '@/pages/user/userInfo.vue'
import assistant from '@/pages/teachers/assistantTeachers/assistant.vue'
import assistantCrete from '@/pages/teachers/assistantTeachers/assistantCrete'
import assistantInfo from '@/pages/teachers/assistantTeachers/assistantInfo.vue'
import inactiveUser from "@/pages/user/inactiveUser/inactiveUser.vue";
import incactiveUserInfoVue from "@/pages/user/inactiveUser/incactiveUserInfo.vue";
import inactiveUserCreateVue from "@/pages/user/inactiveUser/inactiveUserCreate.vue";





let permObj = JSON.parse(localStorage.getItem("permissions"));

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
          value: permObj && permObj.length > 0 ? permObj[0].value : null,
        },
      },
      {
        path: "courses",
        component: courses,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[9].value : null,
        },
      },
      {
        path: "courses/create",
        component: createCourse,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[9].value : null,
        },
      },
      {
        path: "courseInfo/:id",
        component: courseEdit,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[9].value : null,
        },
      },
      {
        path: "branches",
        component: branches,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[15].value : null,
        },
      },
      {
        path: "branchInfo/:id",
        component: branchInfo,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[15].value : null,
        },
      },
      {
        path: "branch/create",
        component: branchCreate,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[15].value : null,
        },
      },
      {
        path: "schedule",
        component: schedule,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[17].value : null,
        },
      },
      {
        path: "group",
        component: group,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[11].value : null,
        },
      },
      {
        path: "group/:id",
        component: groupInfo,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[11].value : null,
        },
      },
      {
        path: "group/create",
        component: createGroup,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[11].value : null,
        },
      },
      {
        path: "student",
        component: student,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[12].value : null,
        },
      },
      {
        path: "student/create",
        component: studentCreate,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[12].value : null,
        },
      },
      {
        path: "student/:id",
        component: studentInfo,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[12].value : null,
        },
      },
      {
        path: "teachers",
        component: teachers,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[8].value : null,
        },
      },
      {
        path: "teachers/create",
        component: teachersCreate,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[8].value : null,
        },
      },
      {
        path: "teachers/:id",
        component: teachersInfo,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[8].value : null,
        },
      },
      {
        path: "assistant-teacher",
        component: assistant,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[10].value : null,
        },
      },
      {
        path: "assistant-teacher/create",
        component: assistantCrete,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[10].value : null,
        },
      },
      {
        path: "assistant-teacher/:id",
        component: assistantInfo,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[10].value : null,
        },
      },
      {
        path: "payme",
        component: payme,
        meta: { requiredAuth: true, value: true },
      },
      {
        path: "live",
        component: live,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[2].value : null,
        },
      },
      {
        path: "profile",
        component: profile,
        meta: { requiredAuth: true, value: true },
      },
      {
        path: "my-courses",
        component: myCourses,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[3].value : null,
        },
      },
      {
        path: "all-courses",
        component: allCourses,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[5].value : null,
        },
      },
      {
        path: "my-groups",
        component: myGroups,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[1].value : null,
        },
      },
      {
        path: "my-children",
        component: myChildren,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[2].value : null,
        },
      },
      {
        path: "add-role",
        component: addrole,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
      },
      {
        path: "user",
        component: user,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
      },
      {
        path: "user/create",
        component: userCrete,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
      },
      {
        path: "user/:id",
        component: userInfo,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
      },
      {
        path: "inactive-user",
        component: inactiveUser,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
      },
      {
        path: "inactive-user/create",
        component: inactiveUserCreateVue,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
      },
      {
        path: "inactive-user/:id",
        component: incactiveUserInfoVue,
        meta: {
          requiredAuth: true,
          value: permObj && permObj.length > 0 ? permObj[6].value : null,
        },
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

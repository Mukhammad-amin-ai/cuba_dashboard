import { createRouter, createWebHistory } from "vue-router";
import Body from "../components/body";
import Default from "../pages/dashboard/defaultPage.vue";
import login from "@/auth/login.vue";
import register from "@/auth/register.vue";
import notfoound from "@/auth/404.vue";
import isUserValid from "./authChecker";
import courses from "@/pages/course/courses.vue";
import branches from "@/pages/branche/branches.vue";
import schedule from "@/pages/schedul/schedule.vue";
import group from "@/pages/group/group.vue";
import braanchSchedule from "@/pages/branche/braanchSchedule.vue";

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
        path: "branches",
        component: branches,
      },
      {
        path: "branchSchedule/:id",
        component: braanchSchedule,
      },
      {
        path: "/schedule",
        component: schedule,
      },
      {
        path: "/group",
        component: group,
      },
    ],

    meta: { requireAuth: true },
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
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requirAuth && !isUserValid()) {
    next("/login");
  } else {
    next();
  }
});

export default router;

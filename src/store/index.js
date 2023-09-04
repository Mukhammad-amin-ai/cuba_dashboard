import { createStore } from "vuex";

import layout from "./modules/layout";
import menu from "./modules/menu";
import auth from "./modules/auth";
import branche from "./modules/branche";
import course from "./modules/course";
import schedule from "@/store/modules/schedule";
import group from "./modules/group";
import teacher from "./modules/teacher";
import student from "./modules/student";
import session from "./modules/session";
import payme from "./modules/payme";
import role from "./modules/role";

export default createStore({
  state: {
    langIcon: "",
    langLangauge: "",
    isActive: false,
    loading: false,
    smallLoading: false,
    choose: true,
    access: true,
    read: false,
    update: false,
    create: false,
    deletee: false,
  },
  getters: {
    langIcon: (state) => {
      return state.langIcon;
    },
    langLangauge: (state) => {
      return state.langLangauge;
    },
  },
  mutations: {
    changeLang(state, payload) {
      localStorage.setItem("currentLanguage", payload.id);
      localStorage.setItem("currentLanguageIcon", payload.icon);
      state.langIcon = payload.icon || "flag-icon-us";
      state.langLangauge = payload.id || "EN";
    },
    change(state) {
      state.isActive = !state.isActive;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setSmallLoading(state, loading) {
      state.smallLoading = loading;
    },
    setChoose(state, payload) {
      state.choose = payload;
    },
    setRoleChacker(state, access) {
      state.access = access;
    },
    setRead(state, read) {
      state.read = read;
    },
    setUpdate(state, update) {
      state.update = update;
    },
    setCreate(state, create) {
      state.create = create;
    },
    setDelete(state, deletee) {
      state.deletee = deletee;
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
    },
    roleCheck({ commit }, option) {
      // console.log(roleObj[option]);
      if (roleObj[option] === "1") {
        commit("setRead", true);
      } else if (roleObj[option] === "2") {
        commit("setRead", true);
        commit("setUpdate", true);
      } else if (roleObj[option] === "3") {
        commit("setRead", true);
        commit("setUpdate", true);
        commit("setCreate", true);
      } else if (roleObj[option] === "4") {
        commit("setRead", true);
        commit("setUpdate", true);
        commit("setCreate", true);
        commit("setDelete", true);
      } else {
        commit("setRoleChacker", false);
      }
    },
  },
  modules: {
    layout,
    menu,
    auth,
    branche,
    course,
    schedule,
    group,
    teacher,
    student,
    session,
    payme,
    role,
  },
});

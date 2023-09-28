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
import lesson from "./modules/lesson";
import inactiveUser from "./modules/inactiveUser";
import user from "./modules/user";
import parent from "./modules/parent";
import assistentTeacher from "./modules/assistentTeacher";

let permObj = JSON.parse(localStorage.getItem("permissions"));

export default createStore({
  state: {
    langIcon: "",
    langLangauge: "",
    isActive: false,
    loading: false,
    smallLoading: false,
    choose: true,
    branchToken: "",
    read: false,
    create: false,
    update: false,
    delete: false,
    alert: false,
    resultOfStudentRerch: false,
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
    setBranchToken(state, payload) {
      state.branchToken = payload;
    },
    setRead(state, payload) {
      state.read = payload;
    },
    setCreate(state, payload) {
      state.create = payload;
    },
    setUpdate(state, payload) {
      state.update = payload;
    },
    setDelete(state, payload) {
      state.delete = payload;
    },
    setAlert(state, payload) {
      state.alert = payload;
    },
    setResult(state, payload) {
      state.resultOfStudentRerch = payload;
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
    },
    permittionCheck({ commit }, name) {
      if (permObj[name].value === 1) {
        commit("setRead", true);
      } else if (permObj[name].value === 2) {
        // console.log(permObj);
        commit("setRead", true);
        commit("setCreate", true);
      } else if (permObj[name].value === 3) {
        commit("setRead", true);
        commit("setCreate", true);
        commit("setUpdate", true);
      } else if (permObj[name].value === 4) {
        // console.log(permObj);
        commit("setRead", true);
        commit("setCreate", true);
        commit("setUpdate", true);
        commit("setDelete", true);
      }
    },
    showHideAlert({commit}){
      commit('setAlert',!this.state.alert)
    }
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
    lesson,
    inactiveUser,
    user,
    parent,
    assistentTeacher,
  },
});

import { createStore } from "vuex";

import layout from "./modules/layout";
import menu from "./modules/menu";
import auth from "./modules/auth";
import branche from "./modules/branche";
import course from "./modules/course";
import schedule from "@/store/modules/schedule";
import group from "./modules/group";
import teacher from "./modules/teacher";
import student from './modules/student';
import session from "./modules/session";
export default createStore({
  state: { langIcon: "", langLangauge: "", isActive: false, loading: false,smallLoading:false,choose:true },
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
    setSmallLoading(state,loading){
      state.smallLoading = loading
    },
    setChoose(state,payload){
      state.choose = payload
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
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
  },
});

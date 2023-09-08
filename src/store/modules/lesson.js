import axios from "axios";
import Api from "./Base_Url";
let token = localStorage.getItem("token");

const state = {
  lessons: [],
};
const mutations = {
  setLessons(state, lessons) {
    state.lessons = lessons;
  },
};
const actions = {
  async getLessons({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/manage/lessons`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      commit("setLessons", response.data);
    } catch (e) {
      console.error("error in getting lessons", e);
    }
  },
  async createLesson({ commit }, option) {
    try {
      let response = await axios.post(`${Api}/api/manage/lesson`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error find in creating lesson ", e);
    }
  },
  async editLesson({ commit }, { id, option }) {
    try {
      let response = await axios.put(`${Api}/api/manage/lesson/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in editing lesson", e);
    }
  },
  async deleteLeasson({ commit }, id) {
    try {
      let response = await axios.delete(`${Api}/api/manage/lesson/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
    } catch (e) {
      console.error("error in deleting lesson", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

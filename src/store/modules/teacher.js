import axios from "axios";

const token = localStorage.getItem("token");
const state = {
  teachers: [],
};
const mutations = {
  setTeacher(state, teachers) {
    state.teachers = teachers;
  },
};
const actions = {
  async getTeachers({ commit }) {
    try {
      const response = await axios.get("http://tulibayev.uz/api/teacher", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data.data);
      if (response.data) {
        commit("setTeacher", response.data.data);
      }
    } catch (e) {
      console.error("teacher error", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

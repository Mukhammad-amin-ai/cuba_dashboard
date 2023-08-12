import axios from "axios";
const token = localStorage.get("token");

const state = {
  students: [],
};
const mutations = {
  setStudent(state, students) {
    state.students = students;
  },
};
const actions = {
  async getStudent({ commit }) {
    try {
      const responce = await axios.get("http://tulibayev.uz/api/student", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      commit("setStudent", responce.data);
    } catch (e) {
        console.error('error in get student', e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import axios from "axios";
const token = localStorage.getItem("token");

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
      console.log(responce.data.data);
      commit("setStudent", responce.data.data);
    } catch (e) {
        console.error('error in get student', e);
    }
  },
  async createStudent({commit},option){
    try {
      const responce = await axios.post("http://tulibayev.uz/api/student",option ,{
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data);
      if (responce.data.message ==='Student created successfully'){
        window.location.href='/student'
      }
    } catch (e) {
        console.error('error in get student', e);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

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
      // console.log(responce.data.data);
      commit("setStudent", responce.data.data);
    } catch (e) {
        console.error('error in get student', e);
    }
  },
  async getStudentById({ commit },option) {
    try {
      const responce = await axios.get(`http://tulibayev.uz/api/student/${option}`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data.data);
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
  },
   async editStudent({commit},{id,option}){
    try {
      const response = await axios.put(`http://tulibayev.uz/api/student/${id}`, option,{
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message ==='Student updated successfully'){
        window.location.href='/student'
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async deleteStudent({commit},option){
    if(window.confirm('O\'chiraymi')){
      try {
        const response = await axios.delete(`http://tulibayev.uz/api/student/${option}`,{
          headers: { Authorization: "Bearer " + token },
        });
        console.log(response.data);
        if (response.data.message ==='Student deleted successfully'){
          window.location.href='/student'
        }
      } catch (error) {
        console.error("error find", error);
      }
    }
  },
  async searchStudent({commit},option){
    try{
      let responce = await axios.post('http://tulibayev.uz/api/student/search',option,{
        headers:{Authorization:'Bearer'+token}
      })
      console.log(responce.data);
      commit('setStudent',responce.data)
    }catch(e){
      console.error('problem in searching student',e);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

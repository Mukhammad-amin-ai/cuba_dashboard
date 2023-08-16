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
      //   console.log(response.data.data);
      if (response.data) {
        commit("setTeacher", response.data.data);
      }
    } catch (e) {
      console.error("teacher error", e);
    }
  },
  async getTeachersById({ commit }, option) {
    try {
      const response = await axios.get(
        `http://tulibayev.uz/api/teacher/${option}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        commit("setTeacher", response.data);
      }
    } catch (e) {
      console.error("teacher error", e);
    }
  },
  async createTeacher({ commit }, option) {
    try {
      let responce = await axios.post(
        "http://tulibayev.uz/api/teacher",
        option,
        { headers: { Authorization: "Bearer" + token } }
      );
      console.log(responce.data);
      if (responce.data.message ==='Teacher created successfully'){
        window.location.href='/teachers'
      }
    } catch (e) {
      console.error("problem with creating treacher", e);
    }
  },
  async editTeacher({commit},{id,option}){
    try {
      const response = await axios.put(`http://tulibayev.uz/api/teacher/${id}`, option,{
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message ==='Teacher updated successfully'){
        window.location.href='/teacher'
      }
    } catch (error) {
      console.error("error find", error);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

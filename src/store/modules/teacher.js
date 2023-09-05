import axios from "axios";
import Api from "./Base_Url";

const token = localStorage.getItem("token");
const state = {
  teachers: [],
  assistants: [],
  myGroups:[]
};
const mutations = {
  setTeacher(state, teachers) {
    state.teachers = teachers;
  },
  setAssistants(state, assistants) {
    state.assistants = assistants;
  },
  setMyGroups(state,myGroups){
    state.myGroups = myGroups
  }
};
const actions = {
  async getTeachers({ commit }) {
    try {
      const response = await axios.get(`${Api}/api/teacher`, {
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
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getTeachersById({ commit }, option) {
    try {
      const response = await axios.get(`${Api}/api/teacher/${option}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(response.data);
      if (response.data) {
        commit("setTeacher", response.data.data);
      }
    } catch (e) {
      console.error("teacher error", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async createTeacher({ commit }, option) {
    try {
      let responce = await axios.post(`${Api}/api/teacher`, option, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data);
      if (responce.data.message === "Teacher created successfully") {
        window.location.href = "/teachers";
      }
    } catch (e) {
      console.error("problem with creating treacher", e);
    }
  },
  async editTeacher({ commit }, { id, option }) {
    try {
      const response = await axios.put(`${Api}/api/teacher/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message === "Teacher updated successfully") {
        window.location.href = "/teachers";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async deleteTeacher({ commit }, option) {
    if (window.confirm("Delete ?")) {
      try {
        const response = await axios.delete(`${Api}/api/teacher/${option}`, {
          headers: { Authorization: "Bearer" + token },
        });
        console.log(response.data);
        if (response.data.message === "success") {
          window.location.href = "/teachers";
        } else if (response.data.status === 400) {
          window.location.href = `/group/${response.data.data[0].id}`;
        }
      } catch (e) {
        console.error("error of deleting teacher", e);
      }
    }
  },
  async getAssistants({ commit }) {
    try {
      const response = await axios.get(`${Api}/api/teacher?role=assistant`, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(response.data);
      commit("setAssistants", response.data.data);
    } catch (e) {
      console.error("error with getting assistants", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getMyGroups({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/teacher/groups`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      commit("setMyGroups",response.data.data)
    } catch (e) {
      console.error("error in getting my groups", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

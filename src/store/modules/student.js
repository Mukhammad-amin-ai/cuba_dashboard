import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");

const state = {
  students: [],
  mycourses: [],
  myChildren: [],
};
const mutations = {
  setStudent(state, students) {
    state.students = students;
  },
  setMycourses(state, mycourses) {
    state.mycourses = mycourses;
  },
  setMyChildren(state, myChildren) {
    state.myChildren = myChildren;
  },
};
const actions = {
  async getStudent({ commit }) {
    try {
      const responce = await axios.get(`${Api}/api/student`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data.data);
      commit("setStudent", responce.data.data);
    } catch (e) {
      console.error("error in get student", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getStudentById({ commit }, option) {
    try {
      const responce = await axios.get(`${Api}/api/student/${option}`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data.data);
      commit("setStudent", responce.data.data);
    } catch (e) {
      console.error("error in get student", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async createStudent({ commit }, option) {
    try {
      const responce = await axios.post(`${Api}/api/student`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data);
      if (responce.data.message === "Student created successfully") {
        window.location.href = "/student";
      }
    } catch (e) {
      console.error("error in get student", e);
    }
  },
  async editStudent({ commit }, { id, option }) {
    try {
      const response = await axios.put(`${Api}/api/student/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message === "Student updated successfully") {
        window.location.href = "/student";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async deleteStudent({ commit }, option) {
    if (window.confirm("O'chiraymi")) {
      try {
        const response = await axios.delete(`${Api}/api/student/${option}`, {
          headers: { Authorization: "Bearer " + token },
        });
        console.log(response.data);
        if (response.data.message === "Student deleted successfully") {
          window.location.href = "/student";
        }
      } catch (error) {
        console.error("error find", error);
      }
    }
  },
  async searchStudent({ commit }, option) {
    try {
      let responce = await axios.post(`${Api}/api/student/search`, option, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data);
      commit("setStudent", responce.data.data);
    } catch (e) {
      console.error("problem in searching student", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getMycourses({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/student/courses`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response);
      commit("setMycourses", response.data.data);
    } catch (e) {
      console.error("error in fetching my courses ", e);
    }
  },
  async getMyChildren({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/parent/students`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      commit("setMyChildren", response.data.data);
    } catch (e) {
      console.error("error in fetching my children", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

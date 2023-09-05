import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");
let roleObj = JSON.parse(localStorage.getItem("role"))

const state = {
  students: [],
  mycourses: [],
  myChildren: [],
  allCourses: [],
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
  setAllCourses(state, allCourses) {
    state.allCourses = allCourses;
  },
};
const actions = {
  async getStudent({ commit }) {
    try {
      const responce = await axios.get(`${Api}/api/manage/student`, {
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
      const responce = await axios.get(`${Api}/api/manage/student/${option}`, {
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
      const responce = await axios.post(`${Api}/api/manage/student`, option, {
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
      const response = await axios.put(
        `${Api}/api/manage/student/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
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
        const response = await axios.delete(
          `${Api}/api/manage/student/${option}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
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
      let responce = await axios.post(
        `${Api}/api/manage/student/search`,
        option,
        {
          headers: { Authorization: "Bearer" + token },
        }
      );
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
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/student/my-courses`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data.data);
      if (response.data.data) {
        commit("setLoading", false, { root: true });
      }
      commit("setMycourses", response.data.data);
    } catch (e) {
      commit("setLoading", false, { root: true });
      console.error("error in fetching my courses ", e);
    }
  },
  async getMyChildren({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/parent/my-children`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data.data);
      if (response.data) {
        commit("setLoading", false, { root: true });
      }
      commit("setMyChildren", response.data.data);
    } catch (e) {
      commit("setLoading", false, { root: true });
      console.error("error in fetching my children", e);
    }
  },
  async getAllCourses({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/${roleObj.name}/all-courses`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data.data.data);
      if (response.data.data) {
        commit("setLoading", false, { root: true });
      }
      commit("setAllCourses", response.data.data.data);
    } catch (e) {
      commit("setLoading", false, { root: true });
      console.error("error in getting all courses", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

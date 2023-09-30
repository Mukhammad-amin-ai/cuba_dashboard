import axios from "axios";
import Api from "./Base_Url";
let branchToken = localStorage.getItem("from_token");

const token = localStorage.getItem("token");
let state = {
  courseData: [],
  pagination: true,
};
const mutations = {
  setCourseData(state, courseData) {
    state.courseData = courseData;
  },
  setPagination(state, payload) {
    state.pagination = payload;
  },
};
const actions = {
  async getCourseData({ commit }) {
    commit("setLoading", true, { root: true });
    let headers = {
      Authorization: "Bearer " + token,
      "Branch-Id": branchToken,
    };
    try {
      let responce = await axios.get(`${Api}/api/manage/course`, {
        headers,
      });
      // console.log(responce.data.data);
      commit("setCourseData", responce.data.data);
      commit("setLoading", false, { root: true });
      if (responce.data.pagination.total >= 1) {
        commit("setPagination", false);
      }
    } catch (error) {
      commit("setLoading", false, { root: true });
      console.error("error find there", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getCourseDataById({ commit }, option) {
    commit("setLoading", true, { root: true });
    try {
      let responce = await axios.get(`${Api}/api/manage/course/${option}`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data);
      if (responce.data.data) {
        commit("setCourseData", responce.data.data);
        commit("setLoading", false, { root: true });
      }
    } catch (error) {
      commit("setLoading", false, { root: true });
      console.error("error find there", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async createCourse({ commit }, option) {
    try {
      let response = await axios.post(`${Api}/api/manage/course`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.success) {
        window.location.href = "/courses";
      }
    } catch (error) {
      console.error("error createCourse", error);
    }
  },
  async editCourse({ commit }, { id, option }) {
    try {
      const response = await axios.put(
        `${Api}/api/manage/course/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        window.location.href = "/courses";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async delete({ commit }, option) {
    if (window.confirm("O'chiraymi")) {
      try {
        const response = await axios.delete(
          `${Api}/api/manage/course/${option}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          window.location.href = "/courses";
        }
      } catch (error) {
        console.error("error find", error);
      }
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

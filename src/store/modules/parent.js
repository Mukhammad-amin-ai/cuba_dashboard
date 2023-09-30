import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");
let branchToken = localStorage.getItem("from_token");

let state = {
  parents: [],
};
const mutations = {
  setPrentData(state, setPrentData) {
    state.parents = setPrentData;
  },
};
const actions = {
  async getParentsData({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let responce = await axios.get(`${Api}/api/manage/parent`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data.data);
      if (responce.data.data) {
        commit("setPrentData", responce.data.data);
        commit("setLoading", false, { root: true });
      }
    } catch (e) {
      console.error("error find in getting parents data", e);
    }
  },
  async createParents({ commit }, option) {
    try {
      let responce = await axios.post(`${Api}/api/manage/parent`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if ((responce.data.name = "parent_created")) {
        window.location.href = "/parent";
      }
    } catch (e) {
      console.error("error in creating user", e);
    }
  },
  async getParentById({ commit }, id) {
    commit("setLoading", true, { root: true });
    let headers = {
      Authorization: "Bearer " + token,
      "Branch-Id": branchToken,
    };
    try {
      let responce = await axios.get(`${Api}/api/manage/parent/${id}`, {
        headers,
      });
      console.log(responce.data);
      if (responce.data.data) {
        commit("setLoading", false, { root: true });
        commit("setPrentData", responce.data.data);
      }
    } catch (e) {
      console.error("error in get id parent", e);
    }
  },
  async updateParent({ commit }, { id, option }) {
    try {
      let responce = await axios.put(`${Api}/api/manage/parent/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if (responce.data.name === "parent_updated") {
        window.location.href = "/parent";
      }
    } catch (e) {
      console.error("erron in updating user", e);
    }
  },
  async deleteParent({ commit }, id) {
    if (window.confirm("Are you want to delete parent")) {
      try {
        let responce = await axios.delete(`${Api}/api/manage/parent/${id}`, {
          headers: { Authorization: "Bearer " + token },
        });
        // console.log(responce.data);
        if (responce.data.success) {
          window.location.href = "/parent";
        }
      } catch (e) {
        console.error("error in deleting parent", e);
      }
    }
  },
  async getStudentCourses({ commit }, student_id) {
    try {
      let response = await axios.get(
        `${Api}/api/parent/my-children/${student_id}/courses`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getStudentCourse", e);
    }
  },
  async getStudentLesson({ commit }, { student_id, course_id }) {
    try {
      let response = await axios.get(
        `${Api}/api/parent/my-children/${student_id}/courses/${course_id}/lessons`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getStudentLesson", e);
    }
  },
  async getStudentExam({ commit }, { student_id, course_id }) {
    try {
      let response = await axios.get(
        `${Api}/api/parent/my-children/${student_id}/course/${course_id}/exams`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getStudentExam", e);
    }
  },
  async getMarkForLesson({ commit }, { student_id, lesson_id }) {
    try {
      let response = await axios.get(
        `${Api}/api/parent/my-children/${student_id}/get-mark/${lesson_id}/lesson`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getting mark lesson", e);
    }
  },
  async getMarkForExam({ commit }, { student_id, lesson_id }) {
    try {
      let response = await axios.get(
        `${Api}/api/parent/my-children/${student_id}/get-mark/${lesson_id}/exam`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getting mark exam", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

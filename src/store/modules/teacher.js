import axios from "axios";
import Api from "./Base_Url";
let branchToken = localStorage.getItem("from_token");

const token = localStorage.getItem("token");
const state = {
  teachers: [],
  assistants: [],
  myGroups: [],
  noData: true,
  myGroupStudetns: [],
  myGroupLesson: [],
  alertMark: false,
};
const mutations = {
  setTeacher(state, teachers) {
    state.teachers = teachers;
  },
  setAssistants(state, assistants) {
    state.assistants = assistants;
  },
  setMyGroups(state, myGroups) {
    state.myGroups = myGroups;
  },
  setNodata(state, noData) {
    state.noData = noData;
  },
  setMyStudents(state, payload) {
    state.myGroupStudetns = payload;
  },
  setMyGroupLesson(state, payload) {
    state.myGroupLesson = payload;
  },
  setAlertMark(state, payload) {
    state.alertMark = payload;
  },
};
const actions = {
  async getTeachers({ commit }) {
    commit("setLoading", true, { root: true });
    let headers = {
      Authorization: "Bearer " + token,
      "Branch-Id": branchToken,
    };
    try {
      const response = await axios.get(`${Api}/api/manage/teacher`, {
        headers,
      });
      //   console.log(response.data.data);
      if (response.data) {
        commit("setLoading", false, { root: true });
        commit("setTeacher", response.data.data);
      }
    } catch (e) {
      commit("setLoading", false, { root: true });
      console.error("teacher error", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getTeachersById({ commit }, option) {
    commit("setLoading", true, { root: true });
    try {
      const response = await axios.get(`${Api}/api/manage/teacher/${option}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(response.data);
      if (response.data) {
        commit("setLoading", false, { root: true });
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
      let responce = await axios.post(`${Api}/api/manage/teacher`, option, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data);
      if (responce.data.status) {
        window.location.href = "/teachers";
      }
    } catch (e) {
      console.error("problem with creating treacher", e);
    }
  },
  async editTeacher({ commit }, { id, option }) {
    try {
      const response = await axios.put(
        `${Api}/api/manage/teacher/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        window.location.href = "/teachers";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async deleteTeacher({ commit }, option) {
    if (window.confirm("Delete ?")) {
      try {
        const response = await axios.delete(
          `${Api}/api/manage/teacher/${option}`,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          window.location.href = "/teachers";
        } else if (response.data.status === 400) {
          window.location.href = `/group/${response.data.data[0].id}`;
        }
      } catch (e) {
        console.error("error of deleting teacher", e);
      }
    }
  },
  async getMyGroups({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/teacher/my-groups`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data.data);
      if (response.data) {
        commit("setLoading", false, { root: true });
      }
      if (response.data.data.length === 0) {
        commit("setNodata", false);
      }
      commit("setMyGroups", response.data.data);
    } catch (e) {
      commit("setLoading", false, { root: true });
      console.error("error in getting my groups", e);
    }
  },
  async getMyGroupStudents({ commit, dispatch }, id) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/my-groups/${id}/students`,
        { headers: { Authorization: "Bearer " + token } }
      );
      // console.log(response.data);
      if (response.data.success) {
        commit("setMyStudents", response.data.data);
        dispatch("getMyGroupLessons", id);
      }
    } catch (e) {
      console.error("error in getting students", e);
    }
  },
  async getMyGroupLessons({ commit }, id) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/my-groups/${id}/lessons`,
        { headers: { Authorization: "Bearer " + token } }
      );
      // console.log(response.data);
      if (response.data.success) {
        commit("setMyGroupLesson", response.data.data);
      }
    } catch (e) {
      console.error("error in geting my group lesson", e);
    }
  },
  async setMark({ commit }, option) {
    try {
      let response = await axios.post(`${Api}/api/teacher/set-mark`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.success) {
        commit("setAlertMark", true);
      }
    } catch (e) {
      console.error("error in seting mark", e);
    }
  },
  async getMyGroupExams({ commit }, id) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/my-groups/${id}/exams`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in geting goup exams", e);
    }
  },
  async getMarksLesson({ commit },{ group, lesson}) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/my-groups/${group}/lesson/${lesson}/get-mark`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getting mark lesson", e);
    }
  },
  async getMarksExam({ commit }, group, exam) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/my-groups/${group}/exam/${exam}/get-mark`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in getting mark exam", e);
    }
  },
  async getMarkForLesson({ commit }, mark) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/get-mark/${mark}/lesson`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in geting mark lesson", e);
    }
  },
  async getMarkForExam({ commit }, mark) {
    try {
      let response = await axios.get(
        `${Api}/api/teacher/get-mark/${mark}/exam`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in geting mark exam", e);
    }
  },
  hideAlert({ commit }) {
    commit("setAlertMark", !state.alertMark);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

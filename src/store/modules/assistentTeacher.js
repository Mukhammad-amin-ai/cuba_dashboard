import axios from "axios";
import Api from "./Base_Url";

const token = localStorage.getItem("token");
const state = {
  assistants: [],
};
const mutations = {
  setAssistants(state, assistants) {
    state.assistants = assistants;
  },
};
const actions = {
  async getAssistTeachers({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      const response = await axios.get(`${Api}/api/manage/teacher/assistant`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(response.data.data);
      if (response.data) {
        commit("setLoading", false, { root: true });
        commit("setAssistants", response.data.data);
      }
    } catch (e) {
      // commit("setLoading", false, { root: true });
      console.error("teacher error", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getAssistTeachersById({ commit }, option) {
    commit("setLoading", true, { root: true });

    try {
      const response = await axios.get(
        `${Api}/api/manage/teacher/assistant/${option}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // console.log(response.data);
      if (response.data) {
        commit("setLoading", false, { root: true });
        commit("setAssistants", response.data.data);
      }
    } catch (e) {
      console.error("teacher error", e);
      if (e.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async createAssistanTeacher({ commit }, option) {
    try {
      let responce = await axios.post(
        `${Api}/api/manage/teacher/assistant`,
        option,
        {
          headers: { Authorization: "Bearer" + token },
        }
      );
      console.log(responce.data);
      if (responce.data.name === "assistant_teacher_created ") {
        window.location.href = "/assistant-teacher";
      }
    } catch (e) {
      console.error("problem with creating treacher", e);
    }
  },
  async editTeacher({ commit }, { id, option }) {
    try {
      const response = await axios.put(
        `${Api}/api/manage/teacher/assistant/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.name === "assistant_teacher_updated") {
        window.location.href = "/assistant-teacher";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async deleteTeacher({ commit }, id) {
    if (window.confirm("Delete ?")) {
      try {
        const response = await axios.delete(
          `${Api}/api/manage/teacher/assistant/${id}`,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
        console.log(response.data);
        if (response.data.name === "assistant_teacher_deleted") {
          window.location.href = "/assistant-teacher";
        }
      } catch (e) {
        console.error("error of deleting teacher", e);
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

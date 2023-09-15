import axios from "axios";
import Api from "./Base_Url";
let branchToken = localStorage.getItem("from_token");

const token = localStorage.getItem("token");
const state = {
  teachers: [],
  assistants: [],
  myGroups: [],
  noData:true
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
  setNodata(state,noData){
    state.noData = noData
  }
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
      if (responce.data.message === "Teacher created successfully") {
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
        const response = await axios.delete(
          `${Api}/api/manage/teacher/${option}`,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
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
  // async getAssistants({ commit }) {
  //   try {
  //     const response = await axios.get(
  //       `${Api}/api/manage/teacher?role=assistant`,
  //       {
  //         headers: { Authorization: "Bearer" + token },
  //       }
  //     );
  //     // console.log(response.data);
  //     commit("setAssistants", response.data.data);
  //   } catch (e) {
  //     console.error("error with getting assistants", e);
  //     if (e.request.status === 401) {
  //       window.location.href = "/login";
  //     }
  //   }
  // },
  async getMyGroups({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/teacher/my-groups`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

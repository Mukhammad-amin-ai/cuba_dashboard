import axios from "axios";
import Api from "./Base_Url";
let branchToken = localStorage.getItem("from_token");

let token = localStorage.getItem("token");

let state = {
  userData: [],
  editHandler: true,
  pagination: true,
  statistics: [],
};
const mutations = {
  setUserData(state, userData) {
    state.userData = userData;
  },
  setUserEditHandler(state, editHandler) {
    state.editHandler = editHandler;
  },
  setPagination(state, payload) {
    state.pagination = payload;
  },
  setStat(state, statistics) {
    state.statistics = statistics;
  },
};
const actions = {
  async getUsersData({ commit }) {
    commit("setLoading", true, { root: true });
    let headers = {
      Authorization: "Bearer " + token,
      "Branch-Id": branchToken,
    };
    try {
      let responce = await axios.get(`${Api}/api/manage/user`, {
        headers,
      });
      // console.log(responce.data.data);
      if (responce.data.data) {
        commit("setLoading", false, { root: true });
        commit("setUserData", responce.data.data);
      }
      if (responce.data.pagination.total >= 1) {
        commit("setPagination", false);
      }
    } catch (e) {
      console.error("error find in getting users", e);
    }
  },
  async createUser({ commit }, option) {
    try {
      let responce = await axios.post(`${Api}/api/manage/user`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data);
      if ((responce.data.data = "user_created")) {
        window.location.href = "/user";
      }
    } catch (e) {
      console.error("error in creating user", e);
    }
  },
  async getUserById({ commit }, id) {
    commit("setLoading", true, { root: true });
    try {
      let responce = await axios.get(`${Api}/api/manage/user/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data.data);
      if (responce.data.data) {
        commit("setLoading", false, { root: true });
        commit("setUserData", responce.data.data);
      }
    } catch (e) {
      console.error("error in get id user", e);
    }
  },
  async updateUser({ commit }, { id, option }) {
    try {
      let responce = await axios.put(`${Api}/api/manage/user/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data);
      if (responce.data.name === "user_updated") {
        window.location.href = "/user";
      }
    } catch (e) {
      console.error("erron in updating user", e);
    }
  },
  async deleteUser({ commit }, id) {
    if (window.confirm("Are you want to delete user")) {
      try {
        let responce = await axios.delete(`${Api}/api/manage/user/${id}`, {
          headers: { Authorization: "Bearer " + token },
        });
        // console.log(responce.data);
        if (responce.data.message === "user_deleted") {
          window.location.href = "/user";
        }
      } catch (e) {
        console.error("error in deleting user", e);
      }
    }
  },
  changeToEdit({ commit }) {
    commit("setUserEditHandler", !state.editHandler);
  },
  async getStatistics({ commit }) {
    // commit("setLoading", true, { root: true });
    let headers = {
      Authorization: "Bearer " + token,
      "Branch-Id": branchToken,
    };
    try {
      let responce = await axios.get(`${Api}/api/user/statistics`, { headers });
      console.log(responce.data.data);
      if (responce.data.status === 200) {
        // commit("setLoading", false, { root: true });
        commit("setStat", responce.data.data);
      }
    } catch (e) {
      console.error("error in geting statistics ", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import axios from "axios";
import Api from "./Base_Url";

const token = localStorage.getItem("token");
let branchToken = localStorage.getItem("from_token");

let state = {
  sessionData: [],
};
const mutations = {
  setSession(state, sessionData) {
    state.sessionData = sessionData;
  },
};
const actions = {
  async getSession({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/manage/session`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      commit("setSession", response.data);
    } catch (e) {
      console.error("error find in getting session", e);
    }
  },
  async getSessionByid({ commit }, id) {
    try {
      let response = await axios.get(`${Api}/api/manage/session/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error find in getting session by id ", e);
    }
  },
  async updateSession({ commit }, { id, option }) {
    try {
      let response = await axios.put(`${Api}/api/manage/session${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error find in getting session", e);
    }
  },
  async deleteSessionByid({ commit }, id) {
    try {
      let response = await axios.delete(`${Api}/api/manage/session/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error find in deleting session by id ", e);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

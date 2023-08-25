import axios from "axios";

const token = localStorage.getItem("token");

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
      let response = await axios.get("http://tulibayev.uz/api/session", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
       commit("setSession", response.data);
    } catch (e) {
      console.error("error find in getting session", e);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
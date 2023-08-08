import axios from "axios";
const token = localStorage.getItem("token");

let state = {
  branchData: [],
};
const mutations = {
  setBranch(state, branchData) {
    state.branchData = branchData;
  },
};
const actions = {
  async getBranches({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get("http://tulibayev.uz/api/branch", {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
      commit("setBranch", response.data.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
    }
  },
  async createBreanch({ commit },option) {
    try {
      const response = await axios.post("http://tulibayev/api/branch", {
        headers: { Authorization: "Bearer " + token },
      });
    } catch (error) {
      console.error("error find", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

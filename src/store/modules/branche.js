import axios from "axios";

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
    const token = localStorage.getItem("token");
    try {
      let response = await axios.get("http://tulibayev.uz/api/branch", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      commit("setBranch", response.data.data);
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

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
    commit("setLoading", true, { root: true });
    const token = localStorage.getItem("token");
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

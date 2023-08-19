import axios from "axios";
const token = localStorage.getItem("token");

let state = {
  branchData: [],
  handler: true,
  room: [],
};
const mutations = {
  setBranch(state, branchData) {
    state.branchData = branchData;
  },
  setHandle(state, hendler) {
    state.handler = hendler;
  },
  setRoom(state, room) {
    state.room = room;
  },
};
const actions = {
  async getBranches({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get("http://tulibayev.uz/api/branch", {
        headers: { Authorization: "Bearer " + token },
      });
      if (response.data && response.data.data) {
        commit("setBranch", response.data.data);
      }
    
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
      if(error.request.status=== 401){
      window.location.href='/login'
      }
    }
  },
  async getBranche({ commit }, option) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(
        `http://tulibayev.uz/api/branch/${option}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      // console.log(response.data);
      commit("setBranch", response.data.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
      if(error.request.status=== 401){
        window.location.href='/login'
        }
    }
  },
  async getRoom({ commit }, option) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(
        `http://tulibayev.uz/api/branch/${option}/rooms`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      commit("setRoom", response.data.total);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
      if(error.request.status=== 401){
        window.location.href='/login'
        }
    }
  },
  async createBreanch({ commit }, option) {
    try {
      const response = await axios.post(
        "http://tulibayev.uz/api/branch",
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.message === "Branch created successfully") {
        window.location.href = "/branches";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async delete({ commit }, option) {
    if (window.confirm("O'chiraymi")) {
      try {
        const response = await axios.delete(
          `http://tulibayev.uz/api/branch/${option}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(response.data);
        if (response.data.message === "Branch deleted successfully") {
          window.location.href = "/branches";
        }
      } catch (error) {
        console.error("error find", error);
      }
    }
  },
  async editBranch({ commit }, { id, option }) {
    try {
      const response = await axios.put(
        `http://tulibayev.uz/api/branch/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.message === "Branch updated successfully") {
        window.location.href = "/branches";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  handler({ commit }) {
    commit("setHandle", !state.handler);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

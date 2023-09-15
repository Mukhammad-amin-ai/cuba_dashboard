import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");
let branchToken = localStorage.getItem("from_token");
let state = {
  branchData: [],
  handler: true,
  room: [],
  total: "",
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
  setTotal(state, total) {
    state.total = total;
  },
};
const actions = {
  async getBranches({ commit }) {
    commit("setLoading", true, { root: true });
    let headers = {
      Authorization: "Bearer " + token,
      "Branch-Id": branchToken,
    };
    try {
      let response = await axios.get(`${Api}/api/manage/branch`, { headers });
      // console.log(response.data.data);
      commit("setBranch", response.data.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getBranche({ commit }, option) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/manage/branch/${option}`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
      commit("setBranch", response.data.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async createBreanch({ commit }, option) {
    try {
      const response = await axios.post(`${Api}/api/manage/branch`, option, {
        headers: { Authorization: "Bearer " + token },
      });
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
          `${Api}/api/manage/branch/${option}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(response.data);
        if (response.data.name === "branch_deleted") {
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
        `${Api}/api/manage/branch/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.name === "branch_updated") {
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

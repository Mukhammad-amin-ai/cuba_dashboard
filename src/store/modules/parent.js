import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");

let state = {
  parents: [],
};
const mutations = {
  setPrentData(state, setPrentData) {
    state.setPrentData = setPrentData;
  },
};
const actions = {
  async getParentsData({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/manage/parent`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data.data);
      if (responce.data.data) {
        commit("setPrentData", responce.data.data);
      }
    } catch (e) {
      console.error("error find in getting parents data", e);
    }
  },
  async createParents({ commit }, option) {
    try {
      let responce = await axios.post(`${Api}/api/manage/parent`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if ((responce.data.name = "parent_created")) {
        window.location.href = "/parent";
      }
    } catch (e) {
      console.error("error in creating user", e);
    }
  },
  async getParentById({ commit }, id) {
    try {
      let responce = await axios.get(`${Api}/api/manage/parent/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data.data);
      if (responce.data.data) {
        commit("setPrentData", responce.data.data);
      }
    } catch (e) {
      console.error("error in get id parent", e);
    }
  },
  async updateParent({ commit }, { id, option }) {
    try {
      let responce = await axios.put(`${Api}/api/manage/parent/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if (responce.data.name === "parent_updated") {
        window.location.href = "/parent";
      }
    } catch (e) {
      console.error("erron in updating user", e);
    }
  },
  async deleteParent({ commit }, id) {
    if (window.confirm("Are you want to delete parent")) {
      try {
        let responce = await axios.delete(`${Api}/api/manage/parent/${id}`, {
          headers: { Authorization: "Bearer " + token },
        });
        // console.log(responce.data);
        if (responce.data.message === "parent_deleted") {
          window.location.href = "/parent";
        }
      } catch (e) {
        console.error("error in deleting parent", e);
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

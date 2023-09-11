import axios from "axios";
import Api from "./Base_Url";

let token = localStorage.getItem("token");

const state = {
  userData: [],
};
const mutations = {
  setUserData(state, userData) {
    state.userData = userData;
  },
};
const actions = {
  async getUsersData({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/manage/user`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data.data);
      if (responce.data.data) {
        commit("setUserData", responce.data);
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
      console.log(responce.data);
    } catch (e) {
      console.error("error in creating user", e);
    }
  },
  async getUserById({ commit }, id) {
    try {
      let responce = await axios.put(`${Api}/api/manage/user/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
    } catch (e) {
      console.error("error in get id user", e);
    }
  },
  async updateUser({ commit }, { id, option }) {
    try {
      let responce = await axios.put(`${Api}/api/manage/user/${id}`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
    } catch (e) {
      console.error("erron in updating user", e);
    }
  },
  async deleteUser({ commit }, id) {
    try {
      let responce = await axios.delete(`${Api}/api/manage/user/${id}`, {
        headers: { Authorization: "Bearer " + Token },
      });
      console.log(responce.data);
    } catch (e) {
      console.error("error in deleting user", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

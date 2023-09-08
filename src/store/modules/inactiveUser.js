import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");

const state = {
  inactiveUser: [],
};
const mutations = {
  setInnactive(state, inactive) {
    state.inactiveUser = inactive;
  },
};
const actions = {
  async getInnactiveUsers({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/manage/user/inactive`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in getting innactive users data", e);
    }
  },
  async getInnactiveUser({ commit }, id) {
    try {
      let response = await axios.get(`${Api}/api/manage/user/inactive/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in geting inactive user data", e);
    }
  },
  async changeInactiveUser({ commit }, id) {
    try {
      let response = await axios.put(`${Api}/api/manage/user/inactive/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in changing inactive user", e);
    }
  },
  async deleteInactiveUser({ commit }, id) {
    try {
      let response = await axios.delete(
        `${Api}/api/manage/user/inactive/${id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in deleting inactive user", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import axios from "axios";

const state = {
  groupData: [],
};
const mutations = {
  setGroup(state, groupData) {
    state.groupData = groupData;
  },
};
const actions = {
  async getGroupData({commit}) {
    let token = localStorage.getItem("token");
    try {
      let responce = await axios.get("http://tulibayev.uz/api/group", {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data);
      commit('setGroup',responce.data)
    } catch (error) {
      console.error("there is problem ", error);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

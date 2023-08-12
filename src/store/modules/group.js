import axios from "axios";
let token = localStorage.getItem("token");

const state = {
  groupData: [],
  groupStudents:[]
};
const mutations = {
  setGroup(state, groupData) {
    state.groupData = groupData;
  },
  setGroupStudents(state, groupStudents) {
    state.groupStudents = groupStudents;
  }
};
const actions = {
  async getGroupData({commit}) {
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
  async getGroupDataWithId({commit},option) {
    try {
      let responce = await axios.get(`http://tulibayev.uz/api/group/${option}`, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data.data);
      commit('setGroup',responce.data.data)
    } catch (error) {
      console.error("there is problem ", error);
    }
  },
  async getGroupStudents({commit},option){
    try{
      let responce = await axios.get(`http://tulibayev.uz/api/group/${option}/students`, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data.data);
      commit('setGroupStudents',responce.data.data)
    }catch (error) {
      console.error('problem with getting group students', error);
    }
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

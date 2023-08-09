import axios from "axios";
const token = localStorage.getItem("token");

let state = {
  branchData: [],
  handler:true
};
const mutations = {
  setBranch(state, branchData) {
    state.branchData = branchData;
  },
  setHandle(state,hendler){
    state.handler=hendler
  }
};
const actions = {
  async getBranches({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get("http://tulibayev.uz/api/branch", {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
      // commit("setBranch", response.data.data);
      if (response.data && response.data.data) {
        commit("setBranch", response.data.data);
    }
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("error find", error);
    }

  },
  async getBranche({ commit },option) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`http://tulibayev.uz/api/branch/${option}`, {
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
      const response = await axios.post("https://tulibayev.uz/api/branch", option,{
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message ==='Branch created successfully'){
        window.location.href='/branches'
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async delete({commit},option){
    if(window.confirm('O\'chiraymi')){
      try {
        const response = await axios.delete(`https://tulibayev.uz/api/branch/${option}`,{
          headers: { Authorization: "Bearer " + token },
        });
        console.log(response.data);
        if (response.data.message ==='Branch deleted successfully'){
          window.location.href='/branches'
        }
      } catch (error) {
        console.error("error find", error);
      }
      // console.log(`https://tulibayev.uz/api/branch/${option}`);
    }
  },
  async editBranch({commit},{id,option}){
    try {
      const response = await axios.put(`https://tulibayev.uz/api/branch/${id}`, option,{
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message ==='Branch updated successfully'){
        window.location.href='branches'
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  handler({commit}){
    commit('setHandle',!state.handler)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

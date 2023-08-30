import axios from "axios";

let token = localStorage.getItem("token");
let roleObj = JSON.parse(localStorage.getItem("role"));
console.log(roleObj);

const state = {
  role: "",
  roleArray: [],
  access:false
};

const mutations = {
  setRolArray(state, array) {
    state.roleArray = array;
  },
  setRoleChacker(state,access){
    state.access = access
  }
};
const actions = {
  async getRole({ commit }) {
    try {
      let responce = await axios.get("http://tulibayev.uz/api/role", {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data);
      if(responce.data){
        commit("setRolArray",responce.data)
      }
    } catch (e) {
      console.error("error in getting role ", e);
    }
  },
  roleCheck({commit}){
    const accessLevels = {
        read:1,
        update:2,
        create:3,
        delete:4
    }
    if(roleObj.name === 'student'){

    }else if (roleObj.name ==='teacher'){

    }else if (roleObj.name === 'parent'){
 
    } else if (roleObj.name === 'admin'){
        commit('setRoleChacker',true )
    }
  }


};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

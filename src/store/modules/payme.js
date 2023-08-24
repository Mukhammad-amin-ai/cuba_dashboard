import axios from "axios";

const state = {
    showHide:true
};
const mutations = {
    setShow(state,showHide){
        state.showHide =showHide
    }
};

const actions = {
  async getCard({ commit },option) {
    try {
      let response = await axios.post("https://checkout.test.paycom.uz/api",option ,{
        headers: {
          "X-Auth": "5e730e8e0b852a417aa49ceb ",
        },
      });
      console.log(response.data);
    //   console.log(response.data.result.card.token);
      if(response.data.result.card.token){
        commit('setShow',false)
      }
    } catch (e) {
      console.error("error there", e);
    }
  },
};

export default {
    namespaced: true,
  state,
  mutations,
  actions,
};

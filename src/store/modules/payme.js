import axios from "axios";
const token = localStorage.getItem("token");
const state = {
  showHide: true,
  showVerify: true,
  addCardComponent: true,
  cashierId: "",
  showInput:false
};
const mutations = {
  setShow(state, showHide) {
    state.showHide = showHide;
  },
  setShowVerify(state, showVerify) {
    state.showVerify = showVerify;
  },
  cardComponent(state, addCardComponent) {
    state.addCardComponent = addCardComponent;
  },
  getId(state, cashierId) {
    state.cashierId = cashierId;
  },
  setShowIput(state,showInput){
    state.showInput = showInput
  }
};

const actions = {
  async getCashiersId({ commit }) {
    try {
      let responce = await axios.get(
        "http://tulibayev.uz/api/payment/cashier",
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(responce.data);
      if (responce.data.cashier_id) {
        commit("getId", responce.data.cashier_id);
      }
    } catch (e) {
      console.error("problem with getting id", e);
    }
  },
  async getCard({ commit, dispatch }, option) {
    await dispatch('getCashiersId');
    try {
      let response = await axios.post(
        "https://checkout.test.paycom.uz/api",
        option,
        {
          headers: {
            "X-Auth": state.cashierId,
          },
        }
      );
      console.log(response.data);
      if (response.data.result.card.token) {
        let token = response.data.result.card.token;
        localStorage.setItem("tokenPayme", token);
        commit("setShow", false);
      }
    } catch (e) {
      console.error("error there", e);
    }
  },
  async getCardVerify({ commit }, option) {
    try {
      let response = await axios.post(
        "https://checkout.test.paycom.uz/api",
        option,
        {
          headers: {
            "X-Auth": "5e730e8e0b852a417aa49ceb ",
          },
        }
      );
      console.log(response.data);
     

    } catch (e) {
      console.error("error there", e);
    }
  },
  async verify({ commit }, option) {
    try {
      let response = await axios.post(
        "https://checkout.test.paycom.uz/api",
        option,
        {
          headers: {
            "X-Auth": "5e730e8e0b852a417aa49ceb ",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error there", e);
    }
  },
  async sendToken({ commit }, option) {
    try {
      let responce = await axios.post(
        "http://tulibayev.uz/api/payment/addcard",
        option,
        {
          headers: { Authorization: "Bearer" + token },
        }
      );
      console.log(responce.data);
      commit("cardComponent", false);
    } catch (e) {
      console.error("error in sending token ", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

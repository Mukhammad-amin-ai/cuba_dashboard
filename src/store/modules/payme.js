import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");
const state = {
  showHide: true,
  showVerify: true,
  addCardComponent: false,
  cashierId: "",
  showInput: false,
  noCardText: "",
  myCard: [],
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
  setShowIput(state, showInput) {
    state.showInput = showInput;
  },
  stAlert(state, payload) {
    state.noCardText = payload;
  },
  setMycard(state, payload) {
    state.myCard = payload;
  },
};

const actions = {
  async getCashiersId({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/payment/cashier`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if (responce.data.cashier_id) {
        commit("getId", responce.data.cashier_id);
      }
    } catch (e) {
      console.error("problem with getting id", e);
    }
  },
  async getCard({ commit, dispatch }, option) {
    await dispatch("getCashiersId");
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
  async buyProduct({ commit }, option) {
    try {
      let response = await axios.post(`${Api}/api/payment/pay`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in buy product", e);
    }
  },
  async payForCourse({ commit }, option) {
    try {
      let response = await axios.post(
        `${Api}/api/student/pay-for-course`,
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error(`error in buy course`, e);
    }
  },
  async getMyCards({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/student/my-cards`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.data) {
        commit("setLoading", false, { root: true });
        commit("setMycard", response.data.data);
      }
      if (response.data.data.length === 0) {
        commit("setAlert", true, { root: true });
        commit("cardComponent", true);
        commit("stAlert", "You don't have a card");
      } else {
        commit("setAlert", false, { root: true });
        commit("cardComponent", false);
      }
    } catch (e) {
      console.error("error in geting my card", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

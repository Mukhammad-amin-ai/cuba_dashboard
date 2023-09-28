import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");
let nameR = localStorage.getItem("name");
if (nameR) {
  nameR = nameR.replace(/^"|"$/g, "");
}
// console.log(nameR);
let state = {
  showHide: true,
  showVerify: true,
  addCardComponent: false,
  cashierId: "",
  showInput: false,
  noCardText: "",
  myCard: [],
  buyCourse: false,
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
  setBuyCourse(state, payload) {
    state.buyCourse = payload;
  },
};

const actions = {
  async getCashiersId({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/${nameR}/cashier`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if (responce.data.data.cashier_id) {
        commit("getId", responce.data.data.cashier_id);
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
      let responce = await axios.post(`${Api}/api/${nameR}/add-card`, option, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data);
      if (responce.data.success) {
        commit("cardComponent", false);
      }
    } catch (e) {
      console.error("error in sending token ", e);
    }
  },
  async buyProduct({ commit }, option) {
    try {
      let response = await axios.post(
        `${Api}/api/${nameR}/pay-for-course`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in buy product", e);
    }
  },
  async payForCourse({ commit }, option) {
    try {
      let response = await axios.post(
        `${Api}/api/${nameR}/pay-for-course`,
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
      let response = await axios.get(`${Api}/api/${nameR}/my-cards`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
      if (response.data.success) {
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
  async deleteCard({ commit }, id) {
    try {
      let response = await axios.delete(
        `${Api}/api/${nameR}/delete-card/${id}`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data.data);
      if (response.data.success) {
        commit("cardComponent", true);
      }
    } catch (e) {
      console.error("error find in deleting card", e);
    }
  },
  async getUserCashier({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/user/cashier`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data.data);
    } catch (e) {
      console.error("error in user cashier id ", e);
    }
  },
  async userPayForCourse({ commit }, option) {
    try {
      let response = await axios.post(
        `${Api}/api/user/pay-for-course`,
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
    } catch (e) {
      console.error("error in paying to course", e);
    }
  },
  async getStudentIdAllcard({ commit }, id) {
    try {
      let response = await axios.get(`${Api}/api/manage/${nameR}/${id}/card`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in geting student'card", e);
    }
  },
  changeBuyProduct({ commit }) {
    commit("setBuyCourse", !state.buyCourse);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

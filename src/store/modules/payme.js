import axios from "axios";
const token = localStorage.getItem("token");
const state = {
  showHide: true,
  showVerify: true,
};
const mutations = {
  setShow(state, showHide) {
    state.showHide = showHide;
  },
  setShowVerify(state, showVerify) {
    state.showVerify = showVerify;
  },
};

async function sendToken(option) {
  try {
    let responce = await axios.post("http://192.168.0.137:8000/api/payment", option, {
      headers: { Authorization: "Bearer" + token },
    });
    console.log(responce.data);
  } catch (e) {
    console.error("error in sending token ", e);
  }
}

const actions = {
  async getCard({ commit }, option) {
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
      if (response.data) {
        let tokenPayme = localStorage.getItem("tokenPayme");
        let sentoption = {
            type: "student",
            id: 1,
            payment_token: tokenPayme
        }
        sendToken(sentoption);
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

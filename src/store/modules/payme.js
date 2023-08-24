import axios from "axios";

const state = {};
const mutations = {};

const actions = {
  async getCard({ commit },option) {
    try {
      let response = await axios.post("https://checkout.test.paycom.uz/api",option ,{
        headers: {
          "X-Auth": "5e730e8e0b852a417aa49ceb ",
        },
      });
      console.log(response.data);
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

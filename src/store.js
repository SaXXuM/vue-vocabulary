import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: {
      display: false,
      title: "",
      description: ""
    },
    userData: {
      installationId: null,
      sessionId: null,
      refreshToken: null,
      userId: 0,
      language: "en",
      appVersion: null,
      baseUrl: "",
      projectName: ""
    },
    listTerms: {}
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },

    hiddenModal(state) {
      state.modal.display = false;
      state.modal.title = "";
      state.modal.description = "";
    },
    showModal(state, payload) {
      state.modal.display = true;
      state.modal.title = payload.title;
      state.modal.description = payload.description;
    }
  },
  actions: {
    fetchListTerms(context, options) {
      return axios({
        method: "get",
        url: state.userData.baseUrl + state.userData.projectName
      });
    }
  }
});

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
    displayLoader: true,
    favoriteScreen: {
      display: false,
      text: "Избранное"
    },
    modalCreateTerm: {
      display: false,
      sended: false
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
    listTerms: [],
    favoriteIds: {}
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
    setUserSessionId(state, sessionId) {
      state.user.sessionId = sessionId;
    },
    setUserRefreshToken(state, refreshToken) {
      state.user.refreshToken = refreshToken;
    },
    setListTerms(state, payload) {
      state.listTerms = payload;
      state.listTerms.forEach(item => Vue.set(item, "isFavorite", false));
    },

    createFavoritesIds(state, payload) {
      state.favoriteIds = payload;
    },

    setFavorites(state) {
      let listTerms = state.listTerms;
      state.favoriteIds.forEach(itemFavorite => {
        listTerms.some(function(item) {
          if (item.id == itemFavorite.objectId) {
            item.isFavorite = true;
          }
        });
      });
    },

    addToFavorite(state, payload) {
      let { listTerms } = state;
      let term = listTerms.find(item => item.id == payload);
      Vue.set(term, "isFavorite", true);
    },

    deleteFromFavorite(state, payload) {
      let { listTerms } = state;
      listTerms.find(item => item.id == payload).isFavorite = false;
    },

    showModal(state, payload) {
      state.modal.display = true;
      state.modal.title = payload.title;
      state.modal.description = payload.description;
    },
    hiddenModal(state) {
      state.modal.display = false;
      state.modal.title = "";
      state.modal.description = "";
    },

    showModalCreateTerm(state) {
      state.modalCreateTerm.display = true;
    },
    hiddenModalCreateTerm(state) {
      state.modalCreateTerm.display = false;
      state.modalCreateTerm.sended = false;
    },

    toggleFavoriteScreen(state, payload) {
      state.favoriteScreen.display = !state.favoriteScreen.display;
      state.favoriteScreen.text = payload;
    },

    confirmTermSend(state) {
      state.modalCreateTerm.sended = true;
    },

    showLoader(state) {
      state.displayLoader = true;
    },
    hideLoader(state) {
      state.displayLoader = false;
    }
  },
  actions: {
    fetchListTerms(context) {
      let { sessionId, baseUrl, projectName } = context.state.userData;
      axios({
        method: "get",
        url:
          baseUrl +
          projectName +
          "/objects/Dictionary?include=['title','html','id']&take=-1&order=title",
        headers: {
          "X-Appercode-Session-Token": sessionId,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(function(response) {
          context.commit("setListTerms", response.data);
          context.commit("setFavorites");
          context.commit("hideLoader");
        })
        .catch(function(error) {
          console.log(error);
          context.commit("hideLoader");
        });
    },
    fetchFavoriteListTerms(context) {
      let { sessionId, baseUrl, projectName, userId } = context.state.userData;
      axios({
        method: "post",
        url: baseUrl + projectName + "/objects/Favorites/query",
        headers: {
          "X-Appercode-Session-Token": sessionId,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          where: {
            userId: userId
          },
          include: ["objectId"]
        }
      })
        .then(function(response) {
          context.commit("createFavoritesIds", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addFavoriteTerm(context, payload) {
      context.commit("showLoader");

      let { sessionId, baseUrl, projectName } = context.state.userData;
      axios({
        method: "post",
        url: baseUrl + projectName + "/favorites/Dictionary/" + payload,
        headers: {
          "X-Appercode-Session-Token": sessionId,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(function() {
          context.commit("addToFavorite", payload);
          context.commit("hideLoader");
        })
        .catch(function() {
          context.commit("hideLoader");
        });
    },

    deleteFavoriteTerm(context, payload) {
      context.commit("showLoader");
      let { sessionId, baseUrl, projectName } = context.state.userData;
      axios({
        method: "delete",
        url: baseUrl + projectName + "/favorites/Dictionary/" + payload,
        headers: {
          "X-Appercode-Session-Token": sessionId,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(function() {
          context.commit("deleteFromFavorite", payload);
          context.commit("hideLoader");
        })
        .catch(function() {
          context.commit("hideLoader");
        });
    },

    sendTermToServer(context, payload) {
      context.commit("showLoader");
      let { sessionId, baseUrl, projectName } = context.state.userData;
      let { title, html } = payload;
      axios({
        method: "post",
        url: baseUrl + projectName + "/objects/NewTerms",
        headers: {
          "X-Appercode-Session-Token": sessionId,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        data: {
          title: title,
          html: html
        }
      })
        .then(function() {
          context.commit("confirmTermSend");
          context.commit("hideLoader");
        })
        .catch(function(error) {
          context.commit("hideLoader");
        });
    }
  }
});

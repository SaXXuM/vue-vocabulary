import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
/* import instanceAPI from "./api/instance";
import userAPI from "./api/user";
import objectAPI from "./api/object"; */

Vue.use(Vuex);

/* const instance = function(store) {
  const inst = instanceAPI(
    store.state.userData.baseUrl + store.state.userData.projectName,
    store.state.userData.sessionId
  );

  inst.interceptors.response.use(undefined, error => {
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return new Promise((resolve, reject) => {
        let newInst = instanceAPI(
          store.state.userData.baseUrl + store.state.userData.projectName,
          store.state.userData.sessionId
        );

        userAPI
          .loginByToken(newInst, store.state.userData.refreshToken)
          .then(loginRes => {
            if (loginRes && loginRes.data && loginRes.data.sessionId) {
              store.commit("setUserSessionId", loginRes.data.sessionId);
              store.commit("setUserRefreshToken", loginRes.data.refreshToken);

              originalRequest.headers["X-Appercode-Session-Token"] =
                loginRes.data.sessionId;

              resolve(newInst(originalRequest));
            } else {
              console.log("Error while refreshToken auth...");
              console.log(loginRes);
              reject();
            }
          })
          .catch(err => {
            console.log("Error while refreshToken auth...");
            console.log(err);

            reject();
          });
      });
    } else {
      return Promise.reject(error);
    }
  });

  return inst;
}; */

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
      display: false
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
    },

    addListTermsFavoriteParams(state) {
      let listTerms = state.listTerms;
      listTerms.forEach(item => (item.isFavorite = false));
    },

    setFavorites(state, payload) {
      state.favoriteIds = payload;
      let listTerms = state.listTerms;
      console.log(state.listTerms);
      state.favoriteIds.forEach(itemFavorite => {
        listTerms.findIndex(function(item) {
          console.log(item.id == itemFavorite.objectId);
        });
      });
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
    hiddenModalHiddenTerm(state) {
      state.modalCreateTerm.display = false;
    },

    toggleFavoriteScreen(state, payload) {
      state.favoriteScreen.display = !state.favoriteScreen.display;
      state.favoriteScreen.text = payload;
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
          context.commit("addListTermsFavoriteParams");
          context.commit("hideLoader");
        })
        .catch(function(error) {
          console.log(error);
          context.commit("hideLoader");
        });
    },
    fetchFavoriteListTerms(context) {
      context.commit("showLoader");
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
          }
        }
      })
        .then(function(response) {
          context.commit("setFavorites", response.data);
          context.commit("hideLoader");
        })
        .catch(function(error) {
          console.log(error);
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
        .then(function(response) {
          console.log(response);
          context.commit("hideLoader");
        })
        .catch(function(error) {
          console.log(error);
          context.commit("hideLoader");
        });
    }
  }
});

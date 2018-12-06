import Vue from "vue";
import Vuex from "vuex";
import instanceAPI from "./api/instance";
import userAPI from "./api/user";
import objectAPI from "./api/object";

Vue.use(Vuex);

const instance = function(store) {
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
};

export default new Vuex.Store({
  state: {
    modal: {
      display: false,
      title: "",
      description: ""
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
    listTerms: {}
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
    hiddenModal(state) {
      state.modal.display = false;
      state.modal.title = "";
      state.modal.description = "";
    },
    showModal(state, payload) {
      state.modal.display = true;
      state.modal.title = payload.title;
      state.modal.description = payload.description;
    },
    showModalCreateTerm(state) {
      state.modalCreateTerm.display = true;
    },
    hiddenModalHiddenTerm(state) {
      state.modalCreateTerm.display = false;
    },
    setListTerms(state, payload) {
      state.listTerms = payload;
    }
  },
  actions: {
    fetchListTerms(context) {
      return new Promise((resolve, reject) => {
        objectAPI
          .objectsBySchemaIdGet(instance(context), "Dictionary", { take: -1 })
          .then(res => {
            if (res && res.data) {
              return res.data.find(profile => {
                return profile.schemaId === config.userProfileScheme;
              });
            } else {
              reject();
            }
          })
          .then(scheme => {
            if (scheme) {
              objectAPI
                .objectsBySchemaIdByIdGet(
                  instance(context),
                  config.userProfileScheme,
                  scheme.itemId
                )
                .then(response => {
                  resolve(response);
                })
                .catch(error => {
                  reject(error);
                });
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
});

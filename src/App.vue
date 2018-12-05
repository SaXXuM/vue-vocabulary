<template>
  <div id="app">
    <div class="list-terms">
      <SearchBar/>
      <ListTermsGroup/>
      <ModalTerm v-if="displayModal"/>
      <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SearchBar from "./components/SearchBar";
import ListTermsGroup from "./components/ListTermsGroup";
import ModalTerm from "./components/ModalTerm";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    HelloWorld,
    SearchBar,
    ListTermsGroup,
    ModalTerm
  },

  computed: mapState({
    displayModal: state => state.modal.display
  }),
  methods: {
    showModal(title, description) {
      this.modal.title = title;
      this.modal.description = description;
    },
    sessionFromNative(sessionData) {
      console.log("Session Data: ");
      console.log(sessionData);
      this.$store.commit("setUserData", JSON.parse(sessionData));
    }
  },
  mounted() {
    window.sessionFromNative = this.sessionFromNative;
    /*
			Example of usage:
			sessionFromNative('{"baseUrl": "http://test.appercode.com/v1/", "projectName": "app2", "installationId": "",    "sessionId": "",    "refreshToken": "",    "userId": 1,    "language": "en",    "appVersion": "1"}');
		*/
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.list-terms__elements {
  margin-bottom: 73px;
}
.disable {
  display: none !important;
}
</style>

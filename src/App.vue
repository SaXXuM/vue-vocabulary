<template>
  <div id="app">
    <div class="list-terms">
      <SearchBar/>
      <ListTermsGroup/>
      <ModalTerm v-if="displayModal"/>
      <ButtonAddTerm/>
      <ModalCreateTerm v-if="displayModalCreateTerm"/>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import ListTermsGroup from "./components/ListTermsGroup";
import ModalTerm from "./components/ModalTerm";
import ButtonAddTerm from "./components/ButtonAddTerm";
import ModalCreateTerm from "./components/ModalCreateTerm";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    SearchBar,
    ListTermsGroup,
    ModalTerm,
    ButtonAddTerm,
    ModalCreateTerm
  },

  computed: mapState({
    displayModal: state => state.modal.display,
    displayModalCreateTerm: state => state.modalCreateTerm.display
  }),
  methods: {
    sessionFromNative(sessionData) {
      console.log("Session Data: ");
      console.log(sessionData);
      this.$store.commit("setUserData", JSON.parse(sessionData));
      this.$store.dispatch("fetchListTerms");
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

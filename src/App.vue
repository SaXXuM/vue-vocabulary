<template>
  <div id="app">
    <Loader v-if="displayLoader"/>
    <div class="list-terms" v-if="displayFavoriteScreen">
      <SearchBar/>
      <ListTermsGroup/>
      <ModalTerm v-if="displayModal"/>
      <ButtonAddTerm/>
      <ModalCreateTerm v-if="displayModalCreateTerm"/>
      <ToggleFavoriteScreen/>
    </div>
    <FavoriteScreen v-else/>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import ListTermsGroup from "./components/ListTermsGroup";
import ModalTerm from "./components/ModalTerm";
import ButtonAddTerm from "./components/ButtonAddTerm";
import ModalCreateTerm from "./components/ModalCreateTerm";
import ToggleFavoriteScreen from "./components/ToggleFavoriteScreen";
import FavoriteScreen from "./components/FavoriteScreen";
import Loader from "./components/Loader";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    SearchBar,
    ListTermsGroup,
    ModalTerm,
    ButtonAddTerm,
    ModalCreateTerm,
    ToggleFavoriteScreen,
    FavoriteScreen,
    Loader
  },

  computed: mapState({
    displayLoader: state => state.displayLoader,
    displayModal: state => state.modal.display,
    displayModalCreateTerm: state => state.modalCreateTerm.display,
    displayFavoriteScreen: state => !state.favoriteScreen.display,
    userData: state => state.userData
  }),
  methods: {
    sessionFromNative(sessionData) {
      console.log("Session Data: ");
      console.log(sessionData);
      this.$store.commit("setUserData", JSON.parse(sessionData));
      this.$store.dispatch("fetchListTerms");
      this.$store.dispatch("fetchFavoriteListTerms");
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

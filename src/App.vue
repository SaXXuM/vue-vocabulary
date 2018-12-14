<template>
  <div id="app">
    <Loader v-if="displayLoader"/>
    <div class="list-terms" v-show="displayFavoriteScreen">
      <SearchBar/>
      <ListTerms/>
      <ModalTerm v-if="displayModal"/>

      <ModalCreateTerm v-if="displayModalCreateTerm"/>
      <ButtonAddTerm/>
      <ToggleFavoriteScreen/>
    </div>
    <FavoriteScreen v-show="!displayFavoriteScreen"/>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import ListTerms from "./components/ListTerms";
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
    ListTerms,
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
      this.$store.dispatch("fetchFavoriteListTerms");
      this.$store.dispatch("fetchListTerms");
    }
  },
  mounted() {
    window.sessionFromNative = this.sessionFromNative;
    /*     sessionFromNative(
      '{"baseUrl": "https://api.sbercode.appercode.com/v1/", "projectName": "sbercode_te","sessionId": "1ec28a99-1625-4a60-99f4-182f372ce1eb","refreshToken": "ca383ac6-b2c9-48eb-8560-eaa41d0f66ce","userId":1}'
    ); */
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
#app {
  margin-bottom: 88px;
}
</style>

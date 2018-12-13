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
    sessionFromNative(
      '{"baseUrl": "https://api.sbercode.appercode.com/v1/", "projectName": "sbercode_te","sessionId": "a6aa96ab-ada3-4527-a86c-7d11a1e3ae52","refreshToken": "3339ec60-261e-4784-9c4f-0922904d1a76","userId":1}'
    );
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
</style>

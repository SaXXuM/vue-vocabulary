<template>
  <div>
    <FavoriteScreenEmty v-if="isFavoriteEmty"/>
    <FavoriteListTerms v-else/>
    <ModalTerm v-if="displayModal"/>
    <HiddenFavoriteScreen/>
  </div>
</template>
<script>
import HiddenFavoriteScreen from "./HiddenFavoriteScreen";
import FavoriteListTerms from "./FavoriteListTerms";
import FavoriteScreenEmty from "./FavoriteScreenEmpty";
import ModalTerm from "./ModalTerm";
import { mapState } from "vuex";

export default {
  name: "FavoriteScreen",
  components: {
    HiddenFavoriteScreen,
    FavoriteListTerms,
    FavoriteScreenEmty,
    ModalTerm
  },
  computed: {
    ...mapState({
      listTerms: state => state.listTerms,
      displayModal: state => state.modal.display
    }),
    isFavoriteEmty() {
      let listTerms = this.listTerms;
      return !listTerms.some(item => item.isFavorite == true);
    }
  }
};
</script>

<style>
</style>

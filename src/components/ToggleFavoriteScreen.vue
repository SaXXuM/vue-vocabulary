<template>
  <div class="open-favorite" @click="showFavoriteScreen">
    <div class="open-favorite__title">{{text}}: {{lengthFavorite}}</div>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OpenFavorite",
  computed: {
    ...mapState({
      text: state => state.favoriteScreen.text,
      listTerms: state => state.listTerms
    }),
    lengthFavorite() {
      return this.listTerms.filter(item => item.isFavorite == true).length;
    }
  },
  methods: {
    showFavoriteScreen() {
      this.$store.commit("toggleFavoriteScreen", "Термины");
    }
  }
};
</script>

<style>
.open-favorite {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  bottom: 16px;
  left: 50%;
  margin-left: -95px;
  min-width: 190px;
  height: 48px;
  background-color: #26a18f;
  border-radius: 24px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12);
}
.open-favorite__title {
  max-width: 154px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
.open-favorite__close {
  border-left: 1px solid rgba(00, 00, 00, 0.12);
  width: 44px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

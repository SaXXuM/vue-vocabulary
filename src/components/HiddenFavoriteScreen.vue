<template>
	<div class="hidden-favorite" @click="showFavoriteScreen">
		<div class="hidden-favorite__title" >{{text}}</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HiddenFavoriteScreen",
  computed: mapState({
    text: state => state.favoriteScreen.text
  }),
  methods: {
    showFavoriteScreen() {
      this.$store.commit("toggleFavoriteScreen", "Избранное");
    }
  }
};
</script>

<style>
.hidden-favorite {
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
  background-color: #6dc746;
  border-radius: 24px;
}
.hidden-favorite__title {
  max-width: 154px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
</style>

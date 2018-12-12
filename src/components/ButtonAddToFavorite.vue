<template>
  <div class="add-to-favorite" :class="{favorite:Favorite}" @click="toggleFavorite(id)">
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.1558 0.472323L14.6189 7.78383L22.3147 7.87316C22.977 7.88089 23.2511 8.72697 22.72 9.12296L16.5456 13.7304L18.839 21.0969C19.0361 21.7308 18.319 22.2531 17.7784 21.8691L11.5004 17.4051L5.22157 21.8683C4.68184 22.2522 3.96392 21.7291 4.16096 21.0961L6.45438 13.7296L0.28005 9.1221C-0.251113 8.72611 0.0230358 7.88003 0.685275 7.8723L8.38113 7.78297L10.8442 0.471464C11.0567 -0.157298 11.9442 -0.157298 12.1558 0.472323Z"
        fill="#EFEFF4"
      ></path>
    </svg>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ButtonAddToFavorite",
  props: {
    id: String
  },
  computed: {
    ...mapState({
      listTerms: state => state.listTerms
    }),
    Favorite() {
      var listTerms = this.listTerms;
      return listTerms.find(item => item.id == this.$props.id).isFavorite;
    }
  },
  methods: {
    toggleFavorite(id) {
      return this.Favorite
        ? this.deleteFavoriteTerm(id)
        : this.addFavoriteTerm(id);
    },
    addFavoriteTerm(id) {
      this.$store.dispatch("addFavoriteTerm", id);
    },
    deleteFavoriteTerm(id) {
      this.$store.dispatch("deleteFavoriteTerm", id);
    }
  }
};
</script>

<style>
.add-to-favorite {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.favorite path {
  fill: #6dc746;
}
</style>


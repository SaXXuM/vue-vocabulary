<template>
  <div class="list-terms__item_wrapper">
    <div class="list-terms__item" @click="showModal(id, title, description, isFavorite)">
      <div class="list-terms__item-title">{{title}}</div>
      <div class="list-terms__item-subtitle">{{description}}</div>
    </div>
    <ButtonAddToFavorite :id="id"/>
  </div>
</template>

<script>
import ButtonAddToFavorite from "./ButtonAddToFavorite";
export default {
  components: {
    ButtonAddToFavorite
  },
  name: "Term",
  props: {
    title: String,
    description: String,
    isFavorite: Boolean,
    id: String
  },
  methods: {
    showModal(id, title, description, isFavorite) {
      this.$store.commit("showModal", {
        id: id,
        title: title,
        description: description,
        isFavorite: isFavorite
      });
    },
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
.list-terms__item {
  display: block;
  text-decoration: none;
}

.list-terms__item_wrapper {
  border-top: 1px solid #c8c7cc;
  padding-right: 51px;
  list-style: none;
  position: relative;
}

.list-terms__item_wrapper_disable {
  display: none;
}

.list-terms__item-title {
  padding-top: 0.75em;
  padding-left: 16px;
  font-size: 15px;
  line-height: 18px;
  color: #373737;
}

.list-terms__item-subtitle {
  padding-left: 16px;
  padding-bottom: 0.75em;
  font-size: 13px;
  line-height: 15px;
  color: #8e8e93;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<template>
  <div class="list-terms__item_wrapper">
    <div class="list-terms__item" @click="showModal(title, description)">
      <div class="list-terms__item-title">{{title}}</div>
      <div class="list-terms__item-subtitle">{{description}}</div>
    </div>
    <ButtonAddToFavorite/>
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
    firstLetter: String
  },
  methods: {
    showModal(title, description) {
      this.$store.commit("showModal", {
        title: title,
        description: description
      });
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

.list-terms__group:last-of-type {
  border-bottom: 1px solid #c8c7cc;
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

<template>
  <div class="list-terms__item-modal">
    <div class="list-terms__item-modal-content">
      <div class="list-terms__item-modal-top">
        <div class="list-terms__item-modal-title">
          {{title}}
          <div class="modal-close" @click="hiddenModal">
            <img src="../assets/img/close.svg">
          </div>
        </div>
      </div>
      <div class="list-terms__item-modal-middle">{{description}}</div>
      <div
        class="list-terms__item-modal-bottom"
        @click="toggleFavorite(id)"
      >{{isFavorite ? remove : add }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Modal",
  data() {
    return {
      add: "Добавить в избранное",
      remove: "Удалить из избранного"
    };
  },
  computed: mapState({
    title: state => state.modal.title,
    description: state => state.modal.description,
    isFavorite: state => state.modal.isFavorite,
    id: state => state.modal.id
  }),
  methods: {
    hiddenModal() {
      this.$store.commit("hiddenModal");
    },
    toggleFavorite(id) {
      return this.isFavorite
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
<style scoped>
.list-terms__item-modal {
  position: fixed;
  display: flex;
  align-items: center;
  align-content: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
}

.list-terms__item-modal-content {
  background-color: #fff;
  margin: 5% 16px;
  border-radius: 4px;
  width: 100%;
}

.list-terms__item-modal-top {
  border-bottom: 1px solid #d8d8d8;
}

.list-terms__item-modal-title {
  padding: 18px 50px 12px 17px;
  display: block;
  text-align: left;
  font-size: 17px;
  line-height: 20px;
  font-weight: normal;
  color: #000000;
  position: relative;
}

.modal-close {
  padding: 18px 17px 12px;
  position: absolute;
  right: 0;
  top: 0;
  color: #979797;
  z-index: 10;
  cursor: pointer;
}

.list-terms__item-modal-middle {
  padding: 17px 15px;
}

.list-terms__item-modal-middle p {
  margin-bottom: 5px;
}
.list-terms__item-modal-bottom {
  border-top: 1px solid #c8c7cc;
  text-align: center;
  font-size: 16px;
  color: #26a18f;
  font-weight: normal;
  padding: 12px 16px;
}
</style>


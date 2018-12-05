<template>
  <div class="list-terms__group">
    <div class="list-terms__header-group">5</div>
    <div class="list-terms__item_wrapper js-show-hide">
      <div
        class="list-terms__item"
        data-title="5+"
        data-description="Методика оценки личной эффективности работника"
        @click="showModal('5+', 'Методика оценки личной эффективности работника')"
      >
        <div class="list-terms__item-title js-search">5+</div>
        <div class="list-terms__item-subtitle">Методика оценки личной эффективности работника</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTermsGroup",
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
  display: block;

  list-style: none;
}

.list-terms__item_wrapper {
  border-top: 1px solid #c8c7cc;
}

.list-terms__item_wrapper_disable {
  display: none;
}

.list-terms__group:last-of-type {
  border-bottom: 1px solid #c8c7cc;
}

.list-terms__header-group {
  display: block;
  margin: 0;
  padding: 0.75em 1em;
  background-color: #f2f2f2;
  border-top: 1px solid #c8c7cc;
  list-style: none;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: #8e8e93;
}

.list-terms__header-group_disable {
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

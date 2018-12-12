<template>
  <div class="list-terms__group">
    <template v-for="item in favoriteListTerms">
      <Term :key="item.id" :id="item.id" :title="item.title" :description="item.html"/>
    </template>
  </div>
</template>
<script>
import Term from "./Term";
import { mapState } from "vuex";

export default {
  name: "FavoriteListTerms",
  components: {
    Term
  },
  computed: {
    ...mapState({
      listTerms: state => state.listTerms
    }),
    favoriteListTerms() {
      let listTerms = this.listTerms;
      return listTerms.filter(item => item.isFavorite == true);
    }
  }
};
</script>

<style>
.list-terms__group {
  margin-bottom: 88px;
}
.list-terms__group:last-of-type {
  border-bottom: 1px solid #c8c7cc;
}
</style>

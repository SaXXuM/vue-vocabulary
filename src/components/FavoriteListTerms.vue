<template>
  <div class="list-terms">
    <template v-for="item in favoriteListTerms">
      <Term
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.html"
        :isFavorite="item.isFavorite"
      />
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



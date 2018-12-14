<template>
  <div class="list-terms__group">
    <HeaderGroup :title="header" v-show="displayHeader"/>
    <Term
      v-for="item in terms"
      v-show="item.display"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.html"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>

<script>
import Term from "./Term";
import HeaderGroup from "./HeaderGroup";

export default {
  name: "GroupTerms",
  components: {
    Term,
    HeaderGroup
  },
  computed: {
    displayHeader() {
      return this.terms.some(item => item.display == true);
    }
  },
  props: {
    header: String,
    terms: Array
  }
};
</script>

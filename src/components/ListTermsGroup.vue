<template>
  <div class="list-terms__group">
    <template v-for="(item, index) in listTerms">
      <HeaderGroup :title="headerTitle" :key="index" v-if="checkHeaderGroup(item.title.charAt(0))"/>
      <Term
        :key="item.id"
        :title="item.title"
        :description="item.html"
        :firstLetter="item.title.charAt(0)"
      />
    </template>
  </div>
</template>

<script>
import Term from "./Term";
import HeaderGroup from "./HeaderGroup";
import { mapState } from "vuex";

export default {
  name: "ListTermsGroup",
  components: {
    Term,
    HeaderGroup
  },
  data() {
    return { headerTitle: "1" };
  },
  computed: mapState({
    listTerms: state => state.listTerms
  }),
  methods: {
    checkHeaderGroup(itemFirstLetter) {
      if (this.$data.headerTitle != itemFirstLetter) {
        this.$data.headerTitle = itemFirstLetter;
        return true;
      } else {
        return false;
      }
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
.list-terms__group {
  margin-bottom: 88px;
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

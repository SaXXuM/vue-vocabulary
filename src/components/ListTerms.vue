<template>
  <div class="list-terms">
    <GroupTerms v-for="(key, value) in groupedListTerm" :key="value" :header="value" :terms="key"/>
  </div>
</template>

<script>
import GroupTerms from "./GroupTerms";
import { mapState } from "vuex";

export default {
  name: "ListTerms",
  components: {
    GroupTerms
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      listTerms: state => state.listTerms,
      searchValue: state => state.searchValue
    }),
    filtredListTerms() {
      let array = this.listTerms.map(item => {
        if (item.title.toLowerCase().indexOf(this.searchValue) != -1) {
          item.display = true;
          return item;
        } else {
          item.display = false;
          return item;
        }
      });
      return array;
    },
    groupedListTerm() {
      let filtredListTerms = this.filtredListTerms;
      let listForRender = {};
      filtredListTerms.forEach(item => {
        if (listForRender[item.title.charAt(0)] == undefined) {
          listForRender[item.title.charAt(0)] = [];
        }
        listForRender[item.title.charAt(0)].push(item);
      });

      return listForRender;
    }
  },
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
.list-terms {
  border-bottom: 0.5px solid #c8c7cc;
}

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

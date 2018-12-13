<template>
  <div class="list-terms__search">
    <input
      autocomplete="off"
      id="search"
      type="text"
      v-model="searchValue"
      @keyup="setSearchValue"
      placeholder="Поиск"
    >
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return { searchValue: "" };
  },
  methods: {
    setSearchValue() {
      this.$store.commit("setSearchValue", this.searchValue);
    }
  }
};
</script>

<style>
.list-terms__search {
  background-color: #ebeef2;
  padding: 8px;
  font-size: 16px;
}

.list-terms__search input {
  width: 100%;
  text-align: center;
  padding: 6px 0;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
}
</style>

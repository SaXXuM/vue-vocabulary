<template>
  <div class="list-terms__search">
    <input
      autocomplete="off"
      id="search"
      type="text"
      ref="srch"
      :value="searchValue"
      @input="searchValue = $event.target.value"
      @keyup="setSearchValueDebounced"
      @focus="clearPlaceholder"
      @blur="restorePlaceholder"
      placeholder="Поиск"
    >
    <div id="clear" @click="clearInput" class="tap_area" v-show="searchValue.length > 0">
      <div class="YzOzod">
        <svg class="lBjYod" viewBox="0 0 24 24"><polygon points="17.8,16.7 16.6,17.9 12,13.3 7.4,17.9 6.2,16.7 10.8,12.1 6.2,7.5 7.4,6.3 12,11 16.6,6.4 17.8,7.6 13.2,12.2"></polygon></svg>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "SearchBar",
  data() {
    return { 
      searchValue: "" 
    };
  },
  computed: {
    setSearchValueDebounced: function() {
      const DELAY = 800;
      return debounce(this.setSearchValue, DELAY);
    }
  },
  methods: {
    setSearchValue() {
      this.$store.commit("setSearchValue", this.searchValue.toLowerCase().trim());
    },
    clearPlaceholder(event) {
      event.target.setAttribute('placeholder', '')
    },
    restorePlaceholder(event) {
      event.target.setAttribute('placeholder', 'Поиск')
    },
    clearInput() {
      this.searchValue = '';
      this.setSearchValue();
      this.$nextTick(() => this.$refs.srch.focus())
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
.tap_area {
    height: 24px;
    width: 24px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.YzOzod {
    background-color: rgba(0, 0, 0, .3);
    border-radius: 50%;
    height: 18px;
    width: 18px;
    z-index: 2;

    transition: 350ms all;

}
.lBjYod {
    transition: 350ms all;
}
.lBjYod {
    fill: #f3f3f3;
}
</style>

<template>
  <div class="list-terms__header-group">{{title}}</div>
</template>

<script>
export default {
  name: "HeaderGroup",
  props: {
    title: String
  }
};
</script>

<style>
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
</style>

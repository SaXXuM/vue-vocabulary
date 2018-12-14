<template>
  <div class="add-button" @click="showModalCreateTerm">
    <img src="../assets/img/add.svg" alt>
  </div>
</template>
<script>
export default {
  name: "ButtonCreateTerm",
  methods: {
    showModalCreateTerm() {
      this.$store.commit("showModalCreateTerm");
    }
  }
};
</script>

<style>
.add-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #26a18f;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12);
}
</style>

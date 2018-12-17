<template>
  <div class="app-error" v-if="display">
    <div class="app-error-message">
      <a href="#" @click.prevent="reload">{{ message }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppError",
  computed: {
    display() {
      return this.$store.state.appError.status;
    },
    message() {
      return this.$store.state.appError.message;
    },
    reload() {
      window.location.reload();
    }
  }
};
</script>

<style>
.app-error {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-error-message {
  display: inline-block;
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: 500;
  background: #e1e1e1;
  font-size: 18px;
  text-shadow: 1px 1px 0 #fcfcfc;
  color: #8d8d8d;
}
.app-error-message a {
  color: inherit;
  text-decoration: none;
}
</style>

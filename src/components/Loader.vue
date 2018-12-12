<template>
  <div class="loader_wrapper">
    <div class="loader"></div>
  </div>
</template>

<style>
.loader_wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
}
.loader {
  border: 6px solid #b5b5b5;
  border-top: 6px solid #6dc746;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
  z-index: 50;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

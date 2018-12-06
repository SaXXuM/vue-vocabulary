<template>
  <div class="modal-create-term_wrapper">
    <div class="modal-create-term">
      <div class="modal-create-term__top">Добавить термин
        <div class="modal-close" @click="hiddenModalCreateTerm">
          <img src="../assets/img/close.svg">
        </div>
      </div>
      <div class="modal-create-term__middle">
        <template v-if="send">
          <div class="icon_wrapper">
            <img src="../assets/img/complete-add-word.svg">
          </div>
          <div class="modal-create-term__title">Спасибо</div>
          <div
            class="modal-create-term__subtitle"
          >После проверки модератором ваш «Термин» появится в общем списке</div>
        </template>
        <form v-else>
          <div class="group-input">
            <label for="newTermTitle">Название</label>
            <input id="newTermTitle" type="text" placeholder="Введите название термина">
          </div>
          <div class="group-input">
            <label for="newTermDescription">Описание</label>
            <textarea id="newTermDescription" placeholder="Опишите термин"></textarea>
          </div>
          <div class="group-input">
            <button type="submit" @click.prevent="sendTerm">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCreateTerm",
  data() {
    return {
      send: false
    };
  },
  methods: {
    hiddenModalCreateTerm() {
      this.$store.commit("hiddenModalHiddenTerm");
    },
    sendTerm() {
      this.send = true;
    }
  }
};
</script>


<style>
.modal-create-term_wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  align-content: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-create-term {
  background-color: #fff;
  margin: 5% 16px;
  border-radius: 4px;
  width: 100%;
}
.modal-create-term__top {
  border-bottom: 1px solid #d8d8d8;
  padding: 18px 50px 12px 17px;
  display: block;
  text-align: left;
  font-size: 17px;
  line-height: 20px;
  font-weight: normal;
  color: #000000;
  position: relative;
}
.modal-close {
  padding: 18px 17px 12px;
  position: absolute;
  right: 0;
  top: 0;
  color: #979797;
  z-index: 10;
  cursor: pointer;
}
.modal-create-term__middle {
  padding: 14px 15px;
}

.icon_wrapper {
  margin: 26px auto 0;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-content: center;
}

.modal-create-term__title {
  font-size: 24px;
  line-height: 29px;
  color: #373737;
  text-align: center;
  margin-top: 24px;
}

.modal-create-term__subtitle {
  margin-top: 8px;
  font-size: 13px;
  line-height: 16px;
  color: #8e8e93;
  text-align: center;
}

.group-input:not(:first-of-type) {
  margin-top: 12px;
}

.group-input label {
  display: block;
  font-size: 13px;
  line-height: 16px;
  color: #373737;
  margin: 8px 0;
}
.group-input input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #c7c1cc;
  border-radius: 4px;
  padding: 12px 16px;
}

.group-input textarea {
  width: 100%;
  height: 88px;
  caret-color: #26a18f;
  box-sizing: border-box;
  border: 1px solid #c7c1cc;
  border-radius: 4px;
  padding: 12px 16px;
}
.group-input button {
  padding: 14px 16px;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  background-color: #26a18f;
  border: 0px;
  border-radius: 2px;
}

.group-input input:focus,
.group-input textarea:focus {
  border-color: #26a18f;
}
</style>


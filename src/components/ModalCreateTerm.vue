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
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 26.871V7C37 4.79086 35.2091 3 33 3H9C6.79086 3 5 4.79086 5 7V39C5 41.2091 6.79086 43 9 43H21"
                stroke="#26A18F"
                stroke-width="4"
                stroke-linecap="round"
              ></path>
              <path d="M13 15H29" stroke="#373737" stroke-width="4" stroke-linecap="round"></path>
              <path d="M13 25H23" stroke="#373737" stroke-width="4" stroke-linecap="round"></path>
              <path
                d="M31 40L36 45L46 35"
                stroke="#4FAE9F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="modal-create-term__title">Спасибо</div>
          <div
            class="modal-create-term__subtitle"
          >После проверки модератором ваш «Термин» появится в общем списке</div>
        </template>
        <form v-else>
          <div class="group-input">
            <label for="newTermTitle">Название</label>
            <input
              v-model="title"
              id="newTermTitle"
              type="text"
              placeholder="Введите название термина"
            >
          </div>
          <div class="group-input">
            <label for="newTermDescription">Описание</label>
            <textarea v-model="html" id="newTermDescription" placeholder="Опишите термин"></textarea>
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
      send: false,
      title: "",
      html: ""
    };
  },
  methods: {
    hiddenModalCreateTerm() {
      this.$store.commit("hiddenModalHiddenTerm");
    },

    sendTerm() {
      this.$store.dispatch("sendTermToServer", {
        title: this.$data.title,
        html: this.$data.html
      });
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
  align-items: center;
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


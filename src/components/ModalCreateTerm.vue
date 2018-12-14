<template>
  <div class="modal-create-term_wrapper">
    <div class="modal-create-term">
      <div class="modal-create-term__top">Добавить термин
        <div class="modal-close" @click="hiddenModalCreateTerm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Group 4</title>
            <desc>Created using Figma</desc>
            <g id="Canvas" transform="translate(-6846 2836)">
              <g id="Group 4">
                <g id="Rectangle 17">
                  <use
                    xlink:href="#path0_fill"
                    transform="matrix(0.707107 0.707107 -0.707107 0.707107 6848.34 -2835.07)"
                    fill="#D8D8D8"
                  ></use>
                  <mask id="mask0_outline_ins">
                    <use
                      xlink:href="#path0_fill"
                      fill="white"
                      transform="matrix(0.707107 0.707107 -0.707107 0.707107 6848.34 -2835.07)"
                    ></use>
                  </mask>
                  <g mask="url(#mask0_outline_ins)">
                    <use
                      xlink:href="#path1_stroke_2x"
                      transform="matrix(0.707107 0.707107 -0.707107 0.707107 6848.34 -2835.07)"
                      fill="#979797"
                    ></use>
                  </g>
                </g>
                <g id="Rectangle 17">
                  <use
                    xlink:href="#path0_fill"
                    transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 6861.07 -2833.66)"
                    fill="#D8D8D8"
                  ></use>
                  <mask id="mask1_outline_ins">
                    <use
                      xlink:href="#path0_fill"
                      fill="white"
                      transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 6861.07 -2833.66)"
                    ></use>
                  </mask>
                  <g mask="url(#mask1_outline_ins)">
                    <use
                      xlink:href="#path1_stroke_2x"
                      transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 6861.07 -2833.66)"
                      fill="#979797"
                    ></use>
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <path id="path0_fill" fill-rule="evenodd" d="M 0 0L 18 0L 18 2L 0 2L 0 0Z"></path>
              <path
                id="path1_stroke_2x"
                d="M 0 0L 0 -1L -1 -1L -1 0L 0 0ZM 18 0L 19 0L 19 -1L 18 -1L 18 0ZM 18 2L 18 3L 19 3L 19 2L 18 2ZM 0 2L -1 2L -1 3L 0 3L 0 2ZM 0 1L 18 1L 18 -1L 0 -1L 0 1ZM 17 0L 17 2L 19 2L 19 0L 17 0ZM 18 1L 0 1L 0 3L 18 3L 18 1ZM 1 2L 1 0L -1 0L -1 2L 1 2Z"
              ></path>
            </defs>
          </svg>
        </div>
      </div>
      <div class="modal-create-term__middle">
        <template v-if="sended">
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
import { mapState } from "vuex";

export default {
  name: "ModalCreateTerm",
  data() {
    return {
      title: "",
      html: ""
    };
  },
  computed: {
    ...mapState({
      sended: state => state.modalCreateTerm.sended
    })
  },
  methods: {
    hiddenModalCreateTerm() {
      this.$store.commit("hiddenModalCreateTerm");
    },

    sendTerm() {
      this.$store.dispatch("sendTermToServer", {
        title: this.$data.title,
        html: this.$data.html
      });
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
  font-weight: bold;
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
  -webkit-appearance: none;
}

.group-input textarea {
  width: 100%;
  height: 88px;
  caret-color: #26a18f;
  box-sizing: border-box;
  border: 1px solid #c7c1cc;
  border-radius: 4px;
  padding: 12px 16px;
  -webkit-appearance: none;
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


<template>
  <div class="favorite-screen-empty">
    <div class="favorite-screen__icon">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 9C12 5.68629 14.6863 3 18 3H62C65.3137 3 68 5.68628 68 9V43.1936C68 44.2981 67.1046 45.1936 66 45.1936C64.8954 45.1936 64 44.2981 64 43.1936V9C64 7.89543 63.1046 7 62 7H18C16.8954 7 16 7.89543 16 9V65C16 66.1046 16.8954 67 18 67H40C41.1046 67 42 67.8954 42 69C42 70.1046 41.1046 71 40 71H18C14.6863 71 12 68.3137 12 65V9Z"
          fill="#C8C7CC"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 23C24 21.8954 24.8954 21 26 21H54C55.1046 21 56 21.8954 56 23C56 24.1046 55.1046 25 54 25H26C24.8954 25 24 24.1046 24 23Z"
          fill="#C8C7CC"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 39C24 37.8954 24.8954 37 26 37H42C43.1046 37 44 37.8954 44 39C44 40.1046 43.1046 41 42 41H26C24.8954 41 24 40.1046 24 39Z"
          fill="#C8C7CC"
        ></path>
        <path
          d="M66.7414 53.5303L69.5257 61.7391L78.2253 61.8394C78.974 61.8481 79.2839 62.798 78.6834 63.2426L71.7037 68.4155L74.2963 76.6861C74.519 77.3978 73.7084 77.9842 73.0974 77.5531L66.0005 72.5412L58.9026 77.5521C58.2925 77.9832 57.481 77.3959 57.7037 76.6851L60.2963 68.4146L53.3166 63.2416C52.7161 62.797 53.026 61.8471 53.7747 61.8385L62.4743 61.7382L65.2586 53.5293C65.4988 52.8234 66.5021 52.8234 66.7414 53.5303Z"
          fill="#C8C7CC"
        ></path>
      </svg>
    </div>
    <div class="favorite-screen__title">У вас еще нет избранных терминов</div>
    <div
      class="favorite-screen__subtitle"
    >Для добавления в избранное воспользуйтесь иконкой звезды рядом с термином.</div>
  </div>
</template>

<script>
export default {
  name: "FavoriteScreenEmpty"
};
</script>


<style>
.favorite-screen {
  padding: 0 16px;
}
.favorite-screen__icon {
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.favorite-screen__title {
  margin-top: 32px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #373737;
}
.favorite-screen__subtitle {
  margin-top: 10px;
  padding: 0 16px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #8e8e93;
}
</style>

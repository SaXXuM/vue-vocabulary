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
          d="M66 43.1936V8.99999C66 6.79086 64.2091 5 62 5H18C15.7909 5 14 6.79086 14 9V65C14 67.2091 15.7909 69 18 69H40"
          stroke="#C8C7CC"
          stroke-width="4"
          stroke-linecap="round"
        ></path>
        <path d="M26 23H54" stroke="#C8C7CC" stroke-width="4" stroke-linecap="round"></path>
        <path d="M26 39H42" stroke="#C8C7CC" stroke-width="4" stroke-linecap="round"></path>
        <path
          d="M58.9026 77.5521L59.3844 77.212L58.4574 76.9214L58.4569 76.9212L57.7037 76.6851M58.9026 77.5521L59.3845 77.2119L58.4573 76.9213L58.4569 76.9212L57.7037 76.6851M58.9026 77.5521C58.2925 77.9832 57.481 77.3959 57.7037 76.6851M58.9026 77.5521L57.7037 76.6851M67.6317 62.3815L68.0865 63.7227L69.5026 63.739L74.5759 63.7975L70.5129 66.8087L69.3697 67.656L69.7953 69.0138L71.3086 73.8414L67.1542 70.9075L66.0007 70.0928L64.847 70.9073L60.6911 73.8413L62.2047 69.0128L62.6303 67.655L61.4871 66.8078L57.4241 63.7965L62.4974 63.738L63.9135 63.7217L64.3683 62.3806L65.9998 57.5705L67.6317 62.3815Z"
          fill="#C8C7CC"
          stroke="#C8C7CC"
          stroke-width="4"
        ></path>
      </svg>
    </div>
    <div class="favorite-screen__title">У вас еще нет избранных терминов</div>
    <div
      class="favorite-screen__subtitle"
    >Для добавления в избранное воспользуйтесь иконкой звезды рядом с термином</div>
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
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #8e8e93;
}
</style>

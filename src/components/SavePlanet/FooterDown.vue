<template>
  <div class="container">
    <h2>Lorem ipsum dolor sit amet.</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, animi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, maiores.
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed?</p>
    <div class="icons">
      <img id="qwe" src="@/assets/FooterIcons/person_outline_black_24dp.svg" alt="">
      <img src="@/assets/FooterIcons/add_alert_black_24dp.svg" alt="">
      <img src="@/assets/FooterIcons/insights_black_24dp.svg" alt="">
      <img src="@/assets/FooterIcons/notifications_active_black_24dp.svg" alt="">
      <img src="@/assets/FooterIcons/settings_black_24dp.svg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("src", "https://cdn.lordicon.com/ritcuqlt.js");
    document.head.appendChild(externalScript);
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Roboto+Mono&display=swap");
.container {
  font-family: "Roboto Mono", monospace;
  align-items: center;
  justify-items: center;
  text-align: center;
  display: grid;
  width: 100%;
  height: 300px;
  background-color: rgb(0, 100, 66, 0.85);
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}
.container > p {
  margin: 0;
  padding: 5px;
}
.container > h2 {
  margin: 15px auto;
}
.icons{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 25px;
}
.icons > img:hover{
  cursor: pointer;
  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@keyframes scale-up-center {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}


</style>

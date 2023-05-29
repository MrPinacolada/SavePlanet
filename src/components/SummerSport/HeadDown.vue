<template>
  <div class="containerHeader">
    <div class="header">
      <div class="sun_clouds">
      <img id="sun" src="@/assets/SummerSportIMG/sun.svg" alt="SunIMG" />
      <img id="clouds" src="@/assets/SummerSportIMG/clouds.svg" alt="">
    </div>
      <p>
        <router-link class="routerLink" :to="{ name: 'SavePlanet' }"
          >SavePlanet</router-link
        >
      </p>

      <p>
        <router-link class="routerLink" :to="{ name: 'SummerSport' }"
          >SummerSport</router-link
        >
      </p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <div class="singUp">
        <p @click="SingUp()">Sing Up</p>
      </div>
      <div class="LoginIn">
        <p @click="LoginIn()">Login In</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { store } from "@/Main.vue";
import "animate.css";

export default defineComponent({
  data() {
    return { store };
  },
  methods: {
    SingUp() {
      this.store.SingUpSummerSport = true;
      this.store.closeFormsSummerSport = false;
    },
    LoginIn() {
      this.store.LogInSummerSport = true;
      this.store.closeFormsSummerSport = false;
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap");
.routerLink {
  text-decoration: none;
  color: inherit;
}
/* .ComponentChangeAnim-enter-from,
.ComponentChangeAnim-leave-to{
  opacity: 0;
}
.ComponentChangeAnim-enter-active,
.ComponentChangeAnim-leave-active{
  transition: opacity 0.5s ease-in-out ;
} */

.containerHeader {
  display: grid;

  overflow: hidden;
}
.header {
  display: grid;
  height: 60px;
  width: 100%;
  margin: 0px auto;
  background-color: rgb(78, 134, 238);
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 0.5fr 1fr;
  justify-items: center;
  align-items: center;
  font-family: "Source Serif Pro", serif;
  font-size: 1.1em;
}
.sun_clouds > img {
  width: 48px;
  height: 48px;
}
#sun:hover {
  animation: rotate-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
#sun{
  z-index: 5;
  position: absolute;
  left: 30px;
}
#clouds{
  border-radius: 20px;
  z-index: 1;
}
.header > p {
  box-shadow: inset 0 0 0 0 #54b3d6;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
.header > p::after {
  content: "";
  display: block;
  width: 100%;
  height: 0.5px;
  background: #ccc;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
}
.header > p:hover::after {
  transform: scale(0);
}
.header > p:hover {
  box-shadow: inset 130px 0 0 0 #54b3d6;
  color: white;
}
@keyframes rotate-in-center {
  0% {
    transform: rotate(-360deg);
    opacity: 1;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
.singUp {
  height: 60px;
  width: 100%;
  background-color: #9bc4e2;
  font-family: "Source Serif Pro", serif;
  font-size: 1.1em;
  text-align: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.LoginIn {
  height: 60px;
  width: 100%;
  background-color: #9ea9da;
  font-family: "Source Serif Pro", serif;
  font-size: 1.1em;
  text-align: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.singUp > p:hover,
.LoginIn > p:hover {
  animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}
@keyframes shake-bottom {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 100%;
  }
  10% {
    transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(4deg);
  }
  80% {
    transform: rotate(-2deg);
  }
  90% {
    transform: rotate(2deg);
  }
}
</style>

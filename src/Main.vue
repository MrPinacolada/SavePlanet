<template>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
  />
  <router-view v-slot="{ Component, route }">
    <!-- <transition
      mode="out-in"
      :leave-active-class="(route.meta.leaveClass as string)"
      :enter-active-class="(route.meta.enterClass as string)"
    > -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
  <a class="UpButt" @click="scrolling()" :class="{ updatedUpButt: UpButt }"></a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import SavePlanetMain from "./components/SavePlanetMain.vue";
import SummerSportMain from "./components/SummerSportMain.vue";
import HeadDown from "./components/SummerSport/HeadDown.vue";
export const store = reactive({
  sendScroll: 0,
  LogInSummerSport: false,
  SingUpSummerSport: false,
  closeFormsSummerSport: false,
  
});
export default defineComponent({
  data() {
    return { store, scrollTop: 0, UpButt: false };
  },
  components: { SavePlanetMain, SummerSportMain, HeadDown },
  watch: {},
  methods: {
    checkScroll() {
      this.scrollTop = window.scrollY;
      this.store.sendScroll = this.scrollTop;
      if (this.scrollTop > 300) {
        this.UpButt = true;
      } else this.UpButt = false;
    },

    scrolling() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    document.addEventListener("scroll", this.checkScroll);
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.UpButt {
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
.updatedUpButt {
  opacity: 1;
  visibility: visible;
}
.UpButt::after {
  content: "\f077";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
.UpButt:hover {
  cursor: pointer;
  background-color: #333;
}
.UpButt:active {
  background-color: #555;
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>

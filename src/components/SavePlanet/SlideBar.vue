<template>
  <LordIcons />

  <div class="SVGlogo" :class="{ updatedSVGlogo: showSlides }">
    <div class="remainder" :class="{ ShowReminder: SlideBarReminder() }">
      <img
        src="@/assets/SlideBar/icons8-natural-user-interface-2-50.png"
        alt=""
      />
    </div>
    <div
      class="leftHand"
      id="leftHand"
      v-if="showSlides"
      :class="{ leaveleftHand: leave }"
    >
      <lord-icon
        src="https://cdn.lordicon.com/tmdnpeej.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/rzdoyang.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/zfuqnliu.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/ovjelerr.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
    </div>

    <img
      src="@/assets/SlideBar/planet-earth-svgrepo-com.svg"
      alt=""
      @click="planetAnimated()"
      :class="{ PlanetOn: showPlanet, PlanetOff: !showPlanet }"
    />
    <div
      class="rightHand"
      id="rightHand"
      v-if="showSlides"
      :class="{ leaverightHand: leave }"
    >
      <lord-icon
        src="https://cdn.lordicon.com/tmdnpeej.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/rzdoyang.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/zfuqnliu.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
      <lord-icon
        src="https://cdn.lordicon.com/ovjelerr.json"
        trigger="loop"
        style="width: 55px; height: 55px"
      >
      </lord-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LordIcons from "./LordIcons.vue";
export default defineComponent({
  data() {
    return {
      showPlanet: true,
      showSlides: false,
      leave: false,
    };
  },
  props: ["slideBarReminder"],
  components: { LordIcons },
  methods: {
    planetAnimated() {
      this.leave = true;
      setTimeout(() => {
        this.showSlides = !this.showSlides;
        this.leave = false;
      }, 300);
    },
    // delay(milliseconds: number) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       this.showReminder = true;
    //       resolve(milliseconds);
    //     }, milliseconds);
    //   });
    // },
    SlideBarReminder() {
      // this.delay(5000);
      if (this.slideBarReminder > 80 ) {
        return true
      } 
    },
  },
});
</script>

<style scoped>
.remainder{
  display: none;
}
.ShowReminder {
  display: block;
  margin: 70px auto;
  position: absolute;
  z-index: 1000000;
  animation: heartbeat 1.5s ease-in-out infinite both;
}
.SVGlogo > img {
  width: 100px;
  height: 100px;
  z-index: 10;
}
.PlanetOn {
  animation: jello-horizontal 5s infinite both;
}
.SVGlogo {
  display: grid;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  width: 500px;
  grid-template-columns: 1fr;
}
.updatedSVGlogo {
  grid-template-columns: 1fr 0.5fr 1fr;
}

.leftHand {
  background-color: rgba(30, 118, 89, 0.625);
  display: grid;
  justify-items: center;
  align-items: center;
  height: 50px;
  width: 0px;
  justify-self: end;
  align-self: center;
  animation: slide-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  border-radius: 20px;
  z-index: 1;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.rightHand {
  background-color: rgba(30, 118, 89, 0.625);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 50px;
  width: 0px;
  align-self: center;
  justify-self: start;
  animation: slide-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  border-radius: 20px;
  z-index: 2;
}
.rightHand > lord-icon {
  animation: slide-right-items 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.leftHand > lord-icon {
  animation: slide-left-items 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.leaveleftHand {
  animation: leaveslide-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.leaverightHand {
  animation: leaveslide-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  3% {
    transform: scale3d(1.25, 0.75, 1);
  }
  6% {
    transform: scale3d(0.75, 1.25, 1);
  }
  9% {
    transform: scale3d(1.15, 0.85, 1);
  }
  12% {
    transform: scale3d(0.95, 1.05, 1);
  }
  16% {
    transform: scale3d(1.05, 0.95, 1);
  }
  20% {
    transform: scale3d(1, 1, 1);
  }
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
}

@keyframes slide-left {
  0% {
    width: 0px;
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    width: 350px;
    transform: translateX(20px);
    opacity: 1;
  }
}
@keyframes slide-right {
  0% {
    width: 0px;
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    width: 350px;
    transform: translateX(-20px);
    opacity: 1;
  }
}
@keyframes slide-right-items {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
@keyframes slide-left-items {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
@keyframes leaveslide-left {
  0% {
    width: 350px;
    transform: translateX(20px);
  }
  100% {
    width: 0px;
    transform: translateX(20px);
  }
}
@keyframes leaveslide-right {
  0% {
    width: 350px;
    transform: translateX(-20px);
  }
  100% {
    width: 0px;
    transform: translateX(-20px);
  }
}
@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
</style>

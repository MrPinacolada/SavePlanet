<template>
  <div class="containerRight">
    <div class="gearContainer">
      <div class="gear" @click="openBar()">
        <img
          id="GeneralGear"
          src="@/assets/SummerSportIMG/rightBarIcons/icons8-engineering-60.png"
          alt=""
        />
      </div>
      <div
        class="HomeGear"
        v-show="openRestGear"
        :class="{ HomeGearLeave: allLeave }"
      >
        <div class="tooltip">
          <img
            src="@/assets/SummerSportIMG/rightBarIcons/icons8-home-page-60.png"
            alt=""
          />
          <div class="left">
            <p>Home page</p>
            <i></i>
          </div>
        </div>
      </div>
      <div
        class="UsGear"
        v-show="openRestGear"
        :class="{ UsGearLeave: allLeave }"
      >
        <div class="tooltip">
          <img
            src="@/assets/SummerSportIMG/rightBarIcons/icons8-info-60.png"
            alt=""
          />
          <div class="left">
            <p>About us</p>
            <i></i>
          </div>
        </div>
      </div>
      <div
        class="ContactsGear"
        v-show="openRestGear"
        :class="{ ContactsGearLeave: allLeave }"
      >
        <div class="tooltip">
          <img
            src="@/assets/SummerSportIMG/rightBarIcons/icons8-address-book-60.png"
            alt=""
          />
          <div class="left">
            <p>Contact page</p>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import "animate.css";
export default defineComponent({
  data() {
    return {
      openRestGear: false,
      allLeave: true,
    };
  },
  methods: {
    openBar() {
      this.allLeave = !this.allLeave;
      setTimeout(() => {
        this.openRestGear = !this.openRestGear;
      }, 500);
    },
  },
});
</script>

<style scoped>
.containerRight {
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #9bc4e2;
}
.gearContainer {
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 50px;
}
.gear {
  margin-top: 20px;
}
#GeneralGear:hover {
  animation: rotate-center 0.6s ease-in-out both;
}
@keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.HomeGear,
.UsGear,
.ContactsGear {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
img:hover {
  scale: 1.1;
  animation: shake-bottom 0.9s ease-in-out forwards;
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
.HomeGear {
  animation: roll-in-blurred-topHomeGear 0.8s cubic-bezier(0.23, 1, 0.32, 1)
    both;
}

.UsGear {
  animation: roll-in-blurred-topUsGear 0.8s cubic-bezier(0.23, 1, 0.32, 1) both
    0.4s;
}
.ContactsGear {
  animation: roll-in-blurred-topContactsGear 0.8s cubic-bezier(0.23, 1, 0.32, 1)
    both 0.9s;
}
@keyframes roll-in-blurred-topHomeGear {
  0% {
    transform: translateY(-120px);
    filter: blur(5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-topUsGear {
  0% {
    transform: translateY(-120px);
    filter: blur(5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes roll-in-blurred-topContactsGear {
  0% {
    transform: translateY(-120px);
    filter: blur(5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
}
.HomeGearLeave {
  animation: roll-out-blurred-topHomeGear 0.4s cubic-bezier(0.23, 1, 0.32, 1)
    both;
}
.UsGearLeave {
  animation: roll-out-blurred-topUsGear 0.4s cubic-bezier(0.23, 1, 0.32, 1) both
    0.2s;
}
.ContactsGearLeave {
  animation: roll-out-blurred-topContactsGear 0.4s
    cubic-bezier(0.23, 1, 0.32, 1) both 0.4s;
}
@keyframes roll-out-blurred-topHomeGear {
  0% {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-120px);
    filter: blur(5px);
    opacity: 0;
  }
}
@keyframes roll-out-blurred-topUsGear {
  0% {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-220px);
    filter: blur(5px);
    opacity: 0;
  }
}
@keyframes roll-out-blurred-topContactsGear {
  0% {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-320px);
    filter: blur(5px);
    opacity: 0;
  }
}
.tooltip {
  display: inline-block;
  position: relative;
  text-align: center;
}

.tooltip .left {
  width: 100px;
  height: 30px;
  top: 50%;
  right: 100%;
  margin-right: 20px;
  transform: translate(0, -50%);
  color: #000000;
  background-color: #eeeeee;
  font-weight: normal;
  font-size: 13px;
  border-radius: 8px;
  position: absolute;
  z-index: 99999999;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.8s;
}

.tooltip:hover .left {
  visibility: visible;
  opacity: 1;
}

.tooltip .left i {
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -12px;
  width: 12px;
  height: 24px;
  overflow: hidden;
}

.tooltip .left i::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  background-color: #eeeeee;
}
</style>

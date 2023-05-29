<template>
  <div class="containerSlider">
    <div class="slider">
      <img
        v-for="(item, index) in Slides"
        :src="`${item.img}`"
        alt=""
        @click="changeSlide(index)"
        class="rolled"
        :class="{ current: selectedIMG == index }"
      />
    </div>
    <div class="arrows">
      <div class="long-arrow-left" @click="PreviousSlide()"></div>
      <span
        @click="changeSlide(index)"
        v-for="(item, index) in Slides"
        class="dotSpans"
        :class="{ ceurrentDot: selectedIMG == index }"
      ></span>
      <div class="long-arrow-right" @click="NextSlide()"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
export default defineComponent({
  data() {
    return {
      selectedIMG: 3 as any,
      Slides: [
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/1.jpeg",
        },
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/2.jpeg",
        },
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/4.jpeg",
        },
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/5.jpeg",
        },
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/6.jpeg",
        },
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/7.jpeg",
        },
        {
          img: "src/assets/SummerSportIMG/SliderPhoto/8.jpeg",
        },
      ],
    };
  },
  methods: {
    changeSlide(index: any) {
      this.selectedIMG = index;
    },
    NextSlide() {
      this.selectedIMG =
        this.selectedIMG < this.Slides.length - 1 ? this.selectedIMG + 1 : 0;
    },
    PreviousSlide() {
      this.selectedIMG =
        this.selectedIMG > 0 ? this.selectedIMG - 1 : this.Slides.length - 1;
    },
  },
});
</script>

<style scoped>
.containerSlider {
  display: grid;
}

.slider {
  display: grid;
  width: 600px;
  height: 450px;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 1fr 0.2fr 0.2fr 0.2fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
  justify-self: center;
}
.rolled {
  width: 40px;
  border: none;
  border-radius: 10px;
  height: 400px;
  object-fit: cover;
  object-position: center center;
  transition: all 0.3s ease-in-out;
}

.rolled:hover {
  transform: scale(1.08);
}
.current {
  height: 400px;
  width: 600px;
}
.current:hover {
  margin-left: 25px;
  margin-right: 25px;
}
.arrows {
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr 1fr;
}
.long-arrow-left {
  display: block;
  width: 15px;
  height: 15px;
  border-top: 1.5px solid rgb(255, 255, 255);
  border-left: 1.5px solid rgb(255, 255, 255);
  justify-self: flex-end;
  margin-right: 50px;
  cursor: pointer;

}
.long-arrow-right {
  display: block;
  width: 15px;
  height: 15px;
  border-top: 1.5px solid rgb(255, 255, 255);
  border-left: 1.5px solid rgb(255, 255, 255);
  justify-self: flex-start;
  margin-left: 50px;
  cursor: pointer;

}

.long-arrow-right {
  transform: rotate(135deg);
}
.long-arrow-left {
  transform: rotate(-45deg);
}
.long-arrow-right::after,
.long-arrow-left::after {
  content: "";
  display: block;
  width: 1.5px;
  height: 30px;
  background-color: rgb(255, 255, 255);
  transform: rotate(-45deg) translate(10px, 4px);
  left: 0;
  top: 0;
}
.dotSpans {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  border: none;
  align-self: center;
  justify-self: center;
  cursor: pointer;

}
.ceurrentDot {
  background-color: #898989;
}
</style>

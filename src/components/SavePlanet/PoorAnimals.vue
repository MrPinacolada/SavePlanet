<template>
  <div class="PhotoContainer">
    <div class="arrow1">
      <img src="@/assets/AnimalsPhoto/arrow.png" @click="checkLastSlide(-1)" alt="" />
    </div>

    <div class="Photo" @animationend="">
      <img
        class="qweqweqwe"
        v-for="(Slide, index) in Slides"
        :src="`${Slide.img}`"
        :key="Slide.img"
        :class="{ entrance: indexArray == index }"
      />
    </div>

    <div class="text" @animationend="">
      <h2
        class="qweqweqwe"
        v-for="(Slide, index) in Slides"
        :class="{ entrance: indexArray == index }"
      >
        {{ Slide.textH2 }}
      </h2>
      <p
        class="qweqweqwe"
        v-for="(Slide, index) in Slides"
        :class="{ entrance: indexArray == index }"
      >
        {{ Slide.textP }}
      </p>
    </div>
    <div class="arrow2">
      <img
        src="@/assets/AnimalsPhoto/arrow.png"
        @click="checkLastSlide(1)"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      indexArray: 0,
      Slides: [
        {
          img: "src/assets/AnimalsPhoto/pexels-george-desipris-792381.jpg",
          textH2: "Poor animal",
          textP:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus in\
        rem incidunt doloribus assumenda dolorem rerum. Asperiores omnis\
        pariatur, possimus nam quidem architecto ex hic adipisci ea facere rem\
        cupiditate esse provident aspernatur labore impedit! Eius ut ratione\
        fugit corrupti ab, quis ullam eum quo beatae laudantium cum culpa! Unde.",
        },
        {
          img: "src/assets/AnimalsPhoto/pexels-pixabay-34231.jpg",
          textH2: "Poor animal",
          textP:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus in\
        rem incidunt doloribus assumenda dolorem rerum. Asperiores omnis\
        pariatur, possimus nam quidem architecto ex hic adipisci ea facere rem\
        cupiditate esse provident aspernatur labore impedit! Eius ut ratione\
        fugit corrupti ab, quis ullam eum quo beatae laudantium cum culpa! Unde.",
        },
        {
          img: "src/assets/AnimalsPhoto/pexels-pixabay-47547.jpg",
          textH2: "Poor animal",
          textP:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus in\
        rem incidunt doloribus assumenda dolorem rerum. Asperiores omnis\
        pariatur, possimus nam quidem architecto ex hic adipisci ea facere rem\
        cupiditate esse provident aspernatur labore impedit! Eius ut ratione\
        fugit corrupti ab, quis ullam eum quo beatae laudantium cum culpa! Unde.",
        },
        {
          img: "src/assets/AnimalsPhoto/pexels-pixabay-62289.jpg",
          textH2: "Poor animal",
          textP:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus in\
        rem incidunt doloribus assumenda dolorem rerum. Asperiores omnis\
        pariatur, possimus nam quidem architecto ex hic adipisci ea facere rem\
        cupiditate esse provident aspernatur labore impedit! Eius ut ratione\
        fugit corrupti ab, quis ullam eum quo beatae laudantium cum culpa! Unde.",
        },
        {
          img: "src/assets/AnimalsPhoto/pexels-roshan-kamath-1661179.jpg",
          textH2: "Poor animal",
          textP:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus in\
        rem incidunt doloribus assumenda dolorem rerum. Asperiores omnis\
        pariatur, possimus nam quidem architecto ex hic adipisci ea facere rem\
        cupiditate esse provident aspernatur labore impedit! Eius ut ratione\
        fugit corrupti ab, quis ullam eum quo beatae laudantium cum culpa! Unde.",
        },
      ],
    };
  },
  methods: {
    checkLastSlide(e:number) {
      this.indexArray += e
      if (this.indexArray >= this.Slides.length) {
        this.indexArray = 0;
        console.log('this.indexArray: ', this.indexArray);
      }
    },
  },
  watch:{
    
  }
});
</script>

<style scoped>
.qweqweqwe {
  display: none;
}
.PhotoContainer {
  border-top: 1px solid rgba(46, 138, 129, 0.5);
  border-bottom: 1px solid rgba(46, 138, 129, 0.5);
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
  width: 1000px;
  height: 400px;
  align-content: center;
  backdrop-filter: blur(2px);
  gap: 30px;
  margin: 50px auto;
  padding: 10px;
}
.text {
  font-size: 1.2em;
  border-radius: 30px;
  justify-self: center;
  align-self: center;
  color: #ccc;
}
.entrance {
  display: block;
  animation: flip-in-hor-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes flip-in-hor-bottom {
  0% {
    /* transform: rotateX(80deg); */
    opacity: 0;
  }
  100% {
    /* transform: rotateX(0); */
    opacity: 1;
  }
}
.Photo {
  margin: 0;
  padding: 0;
}
.Photo > img {
  width: 454px;
  height: 353px;
  border: 3px solid #ccc;
  border-radius: 15px;
}
.Photo > img::before,
img::after {
  width: 30px;
  height: 30px;
  border: 3px solid red;
}
.arrow1 {
  align-self: center;
}
.arrow1 > img {
  width: 50px;
  height: 50px;
  animation: slide-left 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s infinite
    alternate-reverse backwards;
  cursor: pointer;
}
.arrow2 {
  align-self: center;
  transform: rotate(180deg);
}
.arrow2 > img {
  width: 50px;
  height: 50px;
  animation: slide-right 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s infinite
    alternate-reverse backwards;
  cursor: pointer;
}
@keyframes slide-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-35px);
  }
}
@keyframes slide-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-35px);
  }
}
</style>

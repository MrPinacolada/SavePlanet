<template>
  <div class="leftBar">
    <TransitionGroup
      name="bar"
      leave-active-class="FixVueAnimated move animate__animated animate__slideOutLeft"
      enter-active-class="move animate__animated animate__slideInLeft"
    >
      <div class="MajoritemsContainer" v-if="!collapse">
        <div
          class="exampleFirst"
          v-for="(item, index) in MajorBarItems"
          @click="collapseBar(), RestBar(item.spantext)"
        >
          <span class="spanImg"><img :src="`${item.spanImg}`" alt="" /></span>
          <span class="spantext">{{ item.spantext }}</span>
          <span class="spanCapacity">{{ item.spanCapacity }}</span>
        </div>
      </div>
      <div class="ItemCountriesContainer" v-if="collapse">
        <div
          class="exampleSecond"
          v-for="(item, index) in RestBarFilltered"
          @click="collapseBar()"
        >
          <span class="spanImg"><img :src="`${item.spanImg}`" alt="" /></span>
          <span class="spantext">{{ item.spantext }}</span>
        </div>
      </div>

    </TransitionGroup>
  <Weather/>

  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Weather from "./Weather.vue";
export default defineComponent({
  data() {
    return {
      RestBarFilltered: [] as any,
      collapse: false,
      MajorBarItems: [
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.svg",
          spantext: "Countries",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Afghanistan",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Albania",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Angola",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.4.svg",
              spantext: "Cambodia",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.5.svg",
              spantext: "Cyprus",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.6.svg",
              spantext: "Greece",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.7.svg",
              spantext: "Gambia",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.8.svg",
              spantext: "Guinea",
            },
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/2.svg",
          spantext: "Animals",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Snake",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Cat",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Dog",
            },
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/3.svg",
          spantext: "People",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example 1",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Example 2",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Example 3",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.4.svg",
              spantext: "Example 4",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.5.svg",
              spantext: "Example 5",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.6.svg",
              spantext: "Example 6",
            },
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/4.svg",
          spantext: "Food",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example 1",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Example 2",
            },
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/5.svg",
          spantext: "Aliens",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.4.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.5.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.6.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.7.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.8.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.7.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.8.svg",
              spantext: "Example",
            },
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/3.svg",
          spantext: "Crypto",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.4.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.5.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.6.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.7.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.8.svg",
              spantext: "Example",
            },
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/2.svg",
          spantext: "Cars",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Example",
            },
           
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/4.svg",
          spantext: "Dishes",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.2.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.3.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.4.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.5.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.6.svg",
              spantext: "Example",
            },
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.7.svg",
              spantext: "Example",
            },
            
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
        {
          spanImg: "src/assets/SummerSportIMG/LeftBarIcons/5.svg",
          spantext: "Colors",
          data: [
            {
              spanImg: "src/assets/SummerSportIMG/LeftBarIcons/1.1.svg",
              spantext: "Example",
            },
            
          ],
          get spanCapacity() {
            return this.data.length;
          },
        },
       
      ],
    };
  },
  components:{Weather,},
  methods: {
    collapseBar() {
      this.collapse = !this.collapse;
    },
    RestBar(index: string) {
      this.MajorBarItems.forEach((item) => {
        if (item.spantext == index) {
          return (this.RestBarFilltered = item.data);
        }
      });
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

.FixVueAnimated {
  position: absolute;
}

.animate__animated.animate__slideInLeft {
  animation-delay: 0.31s;
}
.animate__animated.animate__slideOutLeft {
  animation-duration: 0.3s;
}

.leftBar {
  display: grid;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: rgb(225, 226, 229);
  grid-template-rows: 1fr 1fr 1fr 1fr;
  
}
.itemsContainer {
  display: grid;
  position: relative;
}

.MajoritemsContainer > div {
  display: grid;
  margin: 10px;
  padding: 5px;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  justify-items: center;
}
.spanImg > img {
  width: 16px;
  height: 16px;
}
.spanCapacity {
  display: inline-block;
  background-color: #ccc;
  height: 20px;
  width: 24px;
  border-radius: 3px;
  text-align: center;
}
.spantext {
  font-family: "Kanit", sans-serif;
  font-size: 1em;
  justify-self: flex-start;
}
.MajoritemsContainer > div:hover {
  background-color: #ccc;
  border-radius: 10px;
  cursor: pointer;
}

.MajoritemsContainer > div:hover::after {
  content: "";
  width: 7px;
  height: 7px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(135deg);
  position: absolute;
  left: 210px;
}
.ItemCountriesContainer {
  /* display: grid; */
  position: relative;

}
.ItemCountriesContainer > div {
  display: grid;
  margin: 10px;
  padding: 5px;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  justify-items: center;
}
.ItemCountriesContainer > div:hover {
  background-color: #ccc;
  border-radius: 10px;
  cursor: pointer;
}

.ItemCountriesContainer > div:hover::after {
  content: "";
  width: 7px;
  height: 7px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  transform: rotate(135deg);
  position: absolute;
  left: 88%;
}
</style>

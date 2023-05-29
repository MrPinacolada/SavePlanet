<template>
  <div class="backround">
    <header>
      <img src="@/assets/header/save-the-planet.png" alt="" />
      <p><router-link class="routerLink" :to="{ name: 'SavePlanet' }"
          >SavePlanet</router-link
        ></p>
      <p><router-link class="routerLink" :to="{ name: 'SummerSport' }"
          >SummerSport</router-link
        ></p>
      <p>Contact</p>
      <p>Home</p>
      <p>About</p>
      <img src="@/assets/header/save-the-planet.png" alt="" />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  components: {},
  methods: {},
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Roboto+Mono&display=swap");
.routerLink {
  text-decoration: none;
  color: inherit;
}
.backround {
  margin: 0 auto;
  position: fixed;
  top: 0;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  background: rgba(0, 108, 62, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
}
header {
  margin: 0px auto;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
  justify-items: center;
  align-items: center;
  font-size: 1.1em;
  font-family: "Fuzzy Bubbles", cursive;
  font-weight: bold;
}
header > img {
  max-width: 50px;
  max-height: 50px;
}
</style>

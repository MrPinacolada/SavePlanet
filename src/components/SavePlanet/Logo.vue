<template>
  <div class="test">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
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
.test{
  font-size: 1.7em;
  font-family: "Roboto Mono", monospace;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url("@/assets/AnimalsPhoto/giphy.gif");
  text-align: center;
  
}
.test>h1{
  margin: 80px auto;
  margin-bottom: 0;
}
</style>

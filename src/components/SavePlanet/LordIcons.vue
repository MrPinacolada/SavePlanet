<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("src", "https://cdn.lordicon.com/ritcuqlt.js");
    document.head.appendChild(externalScript);
  },
});
</script>

<style scoped></style>

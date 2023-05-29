<template>
  <div class="wrapperSummerSport" :class="{backgrounddrop: store.LogInSummerSport || store.SingUpSummerSport, removeBackGroundDrop: store.closeFormsSummerSport }" >
    <HeadDown />
    <div class="containerSummerSport">
      <GeneralBody />
    </div>
   
  </div>
  <SingUp />
    <LoginIn />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GeneralBody from "./SummerSport/GeneralBody.vue";
import HeadDown from "./SummerSport/HeadDown.vue";
import SingUp from "./SummerSport/SingUp.vue";
import LoginIn from "./SummerSport/LoginIn.vue";
import { store } from "@/Main.vue";

export default defineComponent({
  data() {
    return {
      store,
    };
  },
  components: { GeneralBody, HeadDown, SingUp, LoginIn },
});
</script>

<style scoped>
.containerSummerSport {
  display: grid;
  margin: 0;
  padding: 0;
}
.backgrounddrop{
  filter: blur(3px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: slide-in-fwd-center 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes slide-in-fwd-center {
  0% {
    filter: blur(0px);
  }
  50% {
    filter: blur(1.5px);
  }
  100% {
    filter: blur(3px);
  }
 
}
.removeBackGroundDrop{
  filter: blur(3px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: slide-out-fwd-center 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes slide-out-fwd-center {
  0% {
    filter: blur(3px);
  }
  50% {
    filter: blur(1.5px);
  }
  100% {
    filter: blur(0px);
  }
 
}
</style>

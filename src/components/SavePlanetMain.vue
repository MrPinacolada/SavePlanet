<script lang="ts">
import { defineComponent } from "vue";
import PoorAnimals from "./SavePlanet/PoorAnimals.vue";
import TopUp from "./SavePlanet/Header.vue";
import Logo from "./SavePlanet/Logo.vue";
import WaysToSave from "./SavePlanet/WaysToSave.vue";
import SlideBar from "./SavePlanet/SlideBar.vue";
import AnForm from "./SavePlanet/Form.vue";
import FooterDown from "./SavePlanet/FooterDown.vue";
import { store } from '@/Main.vue'
export default defineComponent({
  data() {
    return {
      showForm: false,
      leaveForm: false,
      store,
      get recivedScroll(){return this.store.sendScroll}
    };
  },

  components: {
    PoorAnimals,
    TopUp,
    Logo,
    WaysToSave,
    SlideBar,
    AnForm,
    FooterDown,
  },
  methods: {
    
    closeform() {
      this.leaveForm = !this.leaveForm;
            setTimeout(() => {
        this.showForm = !this.showForm;
        this.leaveForm = !this.leaveForm;
      }, 900);
    },
   
  },
    mounted() {
    
  },
});
</script>

<template :key="idSavePlanet">

  
  <div class="SavePlanetBody">
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
  />
  
  <div class="gradient-background" id="topCheck">
    <TopUp />
    <Logo />
    <SlideBar :slideBarReminder="recivedScroll" />
    <WaysToSave />
    <PoorAnimals />
    <div
      id="FormWrapper"
      :class="{ FormWrapperBold: showForm, leaveForm: leaveForm }"
    >
      <AnForm id="Form" v-show="showForm" @CloseEvent="closeform()" />
    </div>
    <div class="prey">
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Distinctio quod sit dolores, minima exercitationem odit.
      </h3>
    </div>
    <div class="butt">
      <button class="btn" @click="showForm = !showForm">Donate</button>
    </div>
    <FooterDown />
  </div>
</div>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&family=Lato&family=Nunito&family=Playfair+Display:ital@1&family=Prata&family=Raleway:ital,wght@1,100&family=Roboto&family=Roboto+Condensed&family=Teko&display=swap");
.SavePlanetBody{
  margin: 0;
  padding: 0;
  background-image: url(@/assets/AnimalsPhoto/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg);
  background-size:cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
}
.gradient-background {
  display: grid;
  /* height: 100vh; */
  /* width: 100vw; */
  /* margin: 80px auto; */
}
#FormWrapper {
  z-index: 100000;
  align-items: center;
  display: grid;
}
.FormWrapperBold {
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#Form {
  animation: bounce-in-top 1.1s 0.2s both;
}
.butt {
  height: 200px;
}
.prey > h3 {
  font-family: Roboto, sans-serif;
  text-align: center;
  font-size: 2.3em;
  border-radius: 30px;
  justify-self: center;
  align-self: center;
  color: #999999;
}
.leaveForm {
  animation: puff-out-center 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}
@keyframes puff-out-center {
  0% {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    filter: blur(4px);
    opacity: 0;
  }
}

@keyframes bounce-in-top {
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}

.btn {
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: #fff;
  background-color: #0066cc;
  padding: 20px 60px;
  border: 2px solid #0066cc;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin: 0px auto;
}

.btn:hover {
  transition: 1000ms;
  padding: 20px 80px;
  transform: translateY(-0px);
  background-color: #fff;
  color: #0066cc;
  border: solid 2px #0066cc;
}
/* .UpButt {
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
} */

</style>

<template>
  <div
    class="FormContainer animate__animated animate__bounceInDown"
    v-if="store.LogInSummerSport"
  >
    <div
      :class="{
        animate__animated: store.closeFormsSummerSport,
        animate__backOutUp: store.closeFormsSummerSport,
      }"
    >
      <header class="user__header">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
          alt=""
        />
        <h1 class="user__title">Lorem ipsum dolor sit amet.</h1>
      </header>
    </div>
    <form
      @submit.prevent
      action=""
      :class="{
        animate__animated: store.closeFormsSummerSport,
        animate__backOutUp: store.closeFormsSummerSport,
      }"
    >
      <button id="close" type="button" @click="CloseForms()"></button>
      <label for="">Email or username</label>
      <input type="email" v-model="Email" />
      <label for="">Password</label>
      <input type="password" v-model="Password" />
      <button class="btn" @click="CheckAccess(Email, Password)">
        Login In
      </button>
      <div class="accCreated" v-if="Accessgranted">
        <div class="wrapper_checkMark">
          <svg class="animated-check" viewBox="0 0 24 24">
            <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
          </svg>
          <h2>Access granted</h2>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "@/Main.vue";
import "Animate.css";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      store,
      closeForms: false,
      Email: "",
      Password: "",
      Accessgranted: false,
      RESPONSE: "",
    };
  },
  methods: {
    CloseForms() {
      this.store.closeFormsSummerSport = true;
      setTimeout(() => {
        this.store.LogInSummerSport = false;
        this.store.SingUpSummerSport = false;
        this.Accessgranted = false;
      }, 1500);
    },
    CheckAccess(Email: string, Password: string) {
      let options = {
        method: "GET",
        url: "http://127.0.0.1:8080/loginin",
        params: { Password: Password, Email: Email },
      };
      axios
        .request(options)
        .then((response) => {
          this.RESPONSE = response.data;
          if (this.RESPONSE == "granted") {
            console.log("this.RESPONSE: ", this.RESPONSE);
            this.Accessgranted = true;
            setTimeout(() => {
              this.store.closeFormsSummerSport = true;
              this.Accessgranted = false;
              this.store.LogInSummerSport = false;
              this.store.SingUpSummerSport = false;
            }, 2500);
          }
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&family=Lato&family=Nunito&family=Playfair+Display:ital@1&family=Prata&family=Raleway:ital,wght@1,100&family=Roboto&family=Roboto+Condensed&family=Teko&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300;1,400&display=swap");
.FormContainer {
  position: absolute;
  top: 10%;
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100%;
  grid-template-rows: 0.1fr 1.5fr;
}

.user__header {
  text-align: center;
  opacity: 0;
  transform: translate3d(0, 500px, 0);
  animation: arrive 500ms ease-in-out 0.7s forwards;
}
@keyframes arrive {
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
form {
  padding: 30px;
  display: grid;
  justify-items: flex-start;
  gap: 10px;
  width: 310px;
  height: 200px;
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  font-family: "Open Sans", sans-serif;
  filter: drop-shadow(5px 5px 6px #cccccc);
}

input {
  all: unset;
}
input::placeholder {
  opacity: 0.5;
}
input {
  border-bottom: 1px solid rgb(189, 189, 189);
  width: 100%;
  height: 100%;
  font-weight: 100;
  place-content: "asdadaddsads";
}

.btn {
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: #fff;
  background-color: #0066cc;
  padding: 10px 30px;
  border: 2px solid #0066cc;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
  justify-self: center;
}

.btn:hover {
  transition: 1000ms;
  padding: 10px 50px;
  transform: translateY(-0px);
  background-color: #fff;
  color: #0066cc;
  border: solid 2px #0066cc;
}
span {
  justify-self: center;
}
#close {
  overflow: hidden;
  position: relative;
  border: none;
  padding: 0;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: transparent;
  color: #1da1f2;
  font: inherit;
  text-indent: 100%;
  cursor: pointer;
  position: absolute;
  left: 89%;
  margin-top: 5px;
}
#close:focus {
  outline: solid 0 transparent;
  box-shadow: 0 0 0 2px #8ed0f9;
}
#close:hover {
  background: rgba(29, 161, 142, 0.1);
}
#close:before,
#close:after {
  position: absolute;
  top: 15%;
  left: calc(50% - 0.0625em);
  width: 0.125em;
  height: 70%;
  border-radius: 0.125em;
  transform: rotate(45deg);
  background: currentcolor;
  content: "";
}
#close:after {
  transform: rotate(-45deg);
}
.accCreated {
  position: absolute;
  padding: 30px;
  width: 310px;
  height: 200px;
  border: none;
  border-radius: 20px;
  filter: drop-shadow(5px 5px 6px #cccccc);
  background-color: #ffffff;
}

.wrapper_checkMark {
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}
.wrapper_checkMark > h2 {
  text-align: center;
}

.animated-check {
  height: 10em;
  width: 10em;
}

.animated-check path {
  fill: none;
  stroke: #7ac142;
  stroke-width: 4;
  stroke-dasharray: 23;
  stroke-dashoffset: 23;
  animation: draw 1s linear forwards;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>

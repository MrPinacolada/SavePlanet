<template>
  <div
    class="FormContainer animate__animated animate__bounceInDown"
    v-if="store.SingUpSummerSport"
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
      <label>Username</label>
      <input
        type="text"
        placeholder="Write here something..."
        v-model="Username"
        required
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="example@example.com"
        v-model="Email"
        required
      />
      <label :class="{ catchPassowrsError: PassErr }">{{ passwordTEXT }}</label>
      <input
        type="password"
        placeholder="Your password should have at least 6 sumbols"
        v-model="Password"
        required
      />
      <label :class="{ catchPassowrsError: ConfPassErr }">{{
        ConfurmPasswordTEXT
      }}</label>
      <input type="password" v-model="ConfurmPasswordVALUE" required />
      <button class="btn" @click="checkForm()">Submit</button>
      <span>Agree with <a href="http://127.0.0.1:5173/">states</a></span>
      <div class="accCreated" v-if="CreatedSuccessfully">
        <div class="wrapper_checkMark">
          <svg class="animated-check" viewBox="0 0 24 24">
            <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
          </svg>
          <h2>Account created</h2>
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
      Username: "",
      Email: "",
      Password: "",
      passwordTEXT: "Password",
      ConfurmPasswordTEXT: "Confurm password",
      ConfurmPasswordVALUE: "",
      PassErr: false,
      ConfPassErr: false,
      CreatedSuccessfully: false,
      RESPONSE: "",
    };
  },
  methods: {
    CloseForms() {
      this.store.closeFormsSummerSport = true;
      setTimeout(() => {
        this.store.LogInSummerSport = false;
        this.store.SingUpSummerSport = false;
      }, 500);
    },
    async checkForm() {
      if (
        this.Username &&
        this.Email.includes("@") &&
        !this.PassErr &&
        !this.ConfPassErr
      ) {
        let user = {
          UserName: this.Username,
          Email: this.Email,
          Password: this.Password,
        };

        let options = {
          method: "GET",
          url: "http://127.0.0.1:8080/singin",
          params: { User: user },
        };
        try {
          axios
            .request(options)
            .then((response) => {
              this.RESPONSE = response.data;
              if (this.RESPONSE == "added") {
                console.log("this.RESPONSE: ", this.RESPONSE);
                this.CreatedSuccessfully = true;
                setTimeout(() => {
                  this.store.closeFormsSummerSport = true;
                  this.CreatedSuccessfully = false;
                  this.store.LogInSummerSport = false;
                  this.store.SingUpSummerSport = false;
                }, 2500);
              }
            })
            .catch(() => {
              console.log("error");
            });
        } catch {
          console.log("error");
        }
      }
    },
    checkPassword(password: string) {
      this.passwordTEXT =
        password.length >= 6
          ? "Password"
          : "You should add " + (6 - password.length) + " more sumbols";
      this.PassErr = password.length < 6 ? true : false;
    },
    checkConfurmPassword(ConfurmPasswor: string) {
      this.ConfurmPasswordTEXT =
        this.Password == ConfurmPasswor
          ? "Confurm password"
          : "Your passwords are different";
      this.ConfPassErr = this.Password != ConfurmPasswor ? true : false;
    },
  },
  watch: {
    Password(password: string) {
      this.checkPassword(password);
    },
    ConfurmPasswordVALUE(ConfurmPasswor: string) {
      this.checkConfurmPassword(ConfurmPasswor);
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
  width: 410px;
  height: 350px;
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
  left: 90%;
  margin-top: 10px;
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
.catchPassowrsError {
  color: red;
}
.accCreated {
  position: absolute;
  padding: 30px;
  width: 410px;
  height: 350px;
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

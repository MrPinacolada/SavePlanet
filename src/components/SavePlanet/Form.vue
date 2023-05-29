<template>

    <form v-on:submit.prevent="$emit('CloseEvent')">

      <button id="close" @click="$emit('CloseEvent')">sdasdas</button>
      <label>Your name:</label>
      <input type="text" required v-model="name" />
      <label>Your email:</label>
      <input type="email" required v-model="email" />
      <label>Amount of cash:</label>
      <input type="number" required v-model="money" />
      <label>Choose the poor animal you want to help:</label>
      <select v-model="PoorAnimal">
        <option value="id1">Poor animal 1</option>
        <option value="id2">Poor animal 2</option>
        <option value="id2">Poor animal 2</option>
      </select>
      <div class="buttWrapper">
        <button class="SubButt" @click="returnObj()">Send</button>
  </div>

    </form>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      PoorAnimal: "",
      name: "",
      email: "",
      money: 0,
    };
  },
  components: {},
  methods: {
    returnObj() {
      let user = {
        name: this.name,
        email: this.email,
        animal: this.PoorAnimal,
        money: this.money,
      };
      charity.push(user);
      console.log("user: ", user);
    },

  },
});
let charity = [] as any;
</script>

<style scoped>
form {
  width: 400px;
  border: none;
  border-radius: 10px;
  background: whitesmoke;
  text-align: left;
  margin: 0px auto;
  padding: 40px;
  z-index: 10000;
}

label {
  color: #aaa;
  text-transform: uppercase;
  margin: 25px 0px 15px;
  display: inline-block;
  font-size: 0.9em;
}
input,
select {
  display: block;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: whitesmoke;
  border-bottom: 1px solid #e2bebe;
  padding: 5px 6px;
}
input:focus {
  outline: none;
}
select:focus {
  outline: none;
}
.SubButt {
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px 0 16px;
  transition: 0.3s;
  cursor: pointer;
  margin: 20px auto;
  align-self: center;
}

.SubButt:hover {
  background-color: #e4e6eb;
  color: #050505;
  font-size: 15px;
  transition: 0.3s;
}
.buttWrapper {
  display: grid;
  align-items: center;
}

#close {
  overflow: hidden;
  position: absolute;
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
  top: 20px;
  left: 90%;
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
@keyframes flip-out-hor-top {
  0% {
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    opacity: 0;
  }
}
</style>

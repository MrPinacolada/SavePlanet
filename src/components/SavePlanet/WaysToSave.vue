<template>
  <div class="backgroung">
    <div class="slog">How do we able to save our own planet?</div>
    <div class="conteiner">
      <img src="@/assets/WaysToSave/1.png" alt="" />
      <img src="@/assets/WaysToSave/2.png" alt="" />
      <img src="@/assets/WaysToSave/3.png" alt="" />
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error at
          ducimus distinctio cumque esse voluptatibus neque impedit asperiores
          quibusdam voluptates, dolorum optio eaque temporibus cupiditate nisi
          ea, facere non! Iste eum repellat animi placeat rerum, perspiciatis
          facere porro numquam consequatur vitae ipsum expedita dicta deleniti
          inventore ab. Repellat, aut voluptas.
        </p>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          unde molestiae illum architecto delectus dignissimos distinctio beatae
          vel qui quos? Repellat explicabo voluptate quaerat consectetur vel in
          asperiores ea totam.
        </p>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem
          ipsum ad repellendus quas sit magni minus, fugit sapiente, deserunt
          maiores tempore tenetur amet? Architecto.
        </p>
      </div>
    </div>
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
.conteiner {
  display: grid;
  justify-items: center;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1000px;
  column-gap: 160px;
  margin: 50px auto;
}

p {
  color: #ccc;
  font-size: 1.2em;
}
h3 {
  text-align: center;
  color: #ccc;
  font-size: 1.2em;
}
.slog {
  color: #ccc;
  text-align: center;
  font-size: 2.4em;
  animation: text-shadow-pop-bottom 0.6s both;
  margin: 30px auto;
}
@keyframes text-shadow-pop-bottom {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
      0 0 #555555, 0 0 #555555, 0 0 #555555;
    transform: translateY(0);
  }
  100% {
    text-shadow: 0 1px #555555, 0 2px #555555, 0 3px #555555, 0 4px #555555,
      0 5px #555555, 0 6px #555555, 0 7px #555555, 0 8px #555555;
    transform: translateY(-8px);
  }
}
.backgroung {
  width: 1300px;
  margin: 50px auto 0px;
  background-color: rgba(30, 118, 89, 0.625);
  border-radius: 50px;
}
</style>

<template>
  <div class="afterHeader">
      <h1>
        Lorem ipsum, dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Dignissimos, et.
      </h1>
    </div>
  <div class="containerGeneral">
    <LeftBar />
    <div class="centerBar">
      <PhotoSlider />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Natus sunt autem quam voluptatem sed vero, doloribus in veniam, <br />
        debitis quibusdam modi tenetur nobis, ipsum maxime aspernatur iusto
        nisi?<br />
      </h1>

      <div class="textBlock">
        <ul>
          <p>Lorem ipsum dolor sit amet.</p>

          <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Numquam tenetur nostrum labore.
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Id animi quod, repudiandae aliquid ipsa vel placeat <br />
            quos consectetur non maxime.
          </li>
        </ul>
        <div class="YTvideo">
          <iframe
            width="392"
            height="232"
            src="https://www.youtube-nocookie.com/embed/fEYno6SllWY?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h2>Lorem ipsum dolor sit amet?</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
        </tbody>
      </table>
      <div class="botoom">
        <p id="pid1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          eligendi quas quasi maxime quos eos, omnis quam ipsam voluptatem
          alias, ducimus labore? Maxime sequi assumenda sit ad? Harum quis
          doloribus, perferendis consequatur veniam a, dolore aut voluptatum
          asperiores molestiae consectetur provident, labore nostrum unde
          assumenda vel cupiditate possimus impedit tempore!
        </p>
        <img
          src="@/assets/SummerSportIMG/bottomPhoto/beach-volleyball.png"
          id="id1"
        />
        <img
          src="@/assets/SummerSportIMG/bottomPhoto/snorkeling.png"
          id="id2"
        />
        <p id="pid2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          nostrum exercitationem officia excepturi voluptates? Impedit,
          similique atque quidem sed minus illo neque, suscipit ut
          necessitatibus veniam repudiandae itaque dolor laborum, consequatur
          eum voluptates illum quo sapiente maxime nobis eaque veritatis ducimus
          commodi ab! Assumenda, enim vitae? Consequatur officia aspernatur
          doloribus?
        </p>
        <p id="pid3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          provident ipsa mollitia aliquam, vero ipsum nisi sed architecto magnam
          molestiae esse ad non amet earum dolores voluptate. Eaque eos
          doloribus debitis repellendus hic recusandae? In error voluptatibus
          pariatur quod architecto voluptatum nihil perspiciatis consequuntur
          neque aut. Ipsum incidunt eius recusandae?
        </p>
        <img src="@/assets/SummerSportIMG/bottomPhoto/surfboard.png" id="id3" />
      </div>
      <div class="footerGeneralBody">
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </div>
    <RightBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftBar from "./LeftBar.vue";
import RightBar from "./RightBar.vue";
import PhotoSlider from "./PhotoSlider.vue";
import { RouterLink, RouterView } from "vue-router";
export default defineComponent({
  data() {
    return {};
  },
  components: { LeftBar, RightBar, PhotoSlider },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap");

.containerGeneral {
  display: grid;
  padding: 0;
  margin: 0;
  grid-template-columns: 0.2fr 1fr 0.08fr;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin: 10px auto;
}

.centerBar {
  display: grid;
  width: 100%;
  height: 100%;

  background-color: #9ea9da;
  border: none;
  border-radius: 10px;
}
.centerBar > h1 {
  font-family: "Source Serif Pro", serif;
  font-size: 1.5em;
  color: aliceblue;
  letter-spacing: 1px;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
}
.centerBar > .textBlock > ul > p {
  font-family: "Source Serif Pro", serif;
  font-size: 1.2em;
  color: aliceblue;
  letter-spacing: 1px;
  text-align: left;
  margin: 16px 20px;
}
.textBlock {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  margin: 100px auto 0px 0px;
}
.centerBar > .textBlock > ul {
  font-family: "Source Serif Pro", serif;
  font-size: 1.2em;
  color: aliceblue;
  letter-spacing: 1px;
  text-align: left;
  margin: 16px 10px;
}
.YTvideo {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 30px;
}
iframe {
  border: 3px solid aliceblue;
  border-radius: 10px;
}
.textBlock > h2 {
  font-family: "Source Serif Pro", serif;
  font-size: 1.5em;
  color: aliceblue;
  letter-spacing: 1px;
  justify-self: center;
  grid-column: span 2;
}
.botoom {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 30px;
  margin-top: 150px;
}
.botoom > img {
  width: 200px;
  height: 200px;
}
.botoom > p {
  font-family: "Source Serif Pro", serif;
  font-size: 1.1em;
  color: aliceblue;
  letter-spacing: 1px;
}
#pid1 {
  text-align: right;
}
#pid2 {
  text-align: left;
}
#pid3 {
  text-align: right;
}
#id1 {
  justify-self: center;
}

#id2 {
  justify-self: center;
}
#id3 {
  justify-self: center;
}
.footerGeneralBody {
  margin-top: 30px;
  padding: 0;
  width: 100%;
  height: 50px;
  background-color: #55608f;
  text-align: center;
  font-size: small;
  border-radius: 10px;
}
.afterHeader {
  display: grid;
  margin: 0px auto;
  padding: 0px;
  width: 100vw;
  height: 300px;
  background-size: cover;
  background-position: center 15%;
  background-image: url(@/assets/SummerSportIMG/1651073535_47-vsegda-pomnim-com-p-serfing-na-more-foto-72.jpg);
  justify-items: flex-start;
}
.afterHeader > h1 {
  text-align: center;
  margin: 30px 30px;
  font-family: "Source Serif Pro", serif;
  color: #ffffff;
}
/* -------------------------TABLE------------------ */

table {
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  justify-self: center;
  align-self: center;
  margin-top: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
th,
td {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
th {
  text-align: left;
}
thead th {
  background-color: #55608f;
}
tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
tbody td {
  position: relative;
}
tbody td:hover:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -9999px;
  bottom: -9999px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}
/* -------------------------TABLE------------------ */
</style>

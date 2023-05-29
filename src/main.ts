import { createApp } from "vue";
import Main from "./Main.vue";
import router from "./router";
import PoorAnimals from "./components/SavePlanet/PoorAnimals.vue";
import TopUp from "./components/SavePlanet/Header.vue";
import Logo from "./components/SavePlanet/Logo.vue";
import WaysToSave from "./components/SavePlanet/WaysToSave.vue";
import SlideBar from "./components/SavePlanet/SlideBar.vue";
import AnForm from "./components/SavePlanet/Form.vue";
import FooterDown from "./components/SavePlanet/FooterDown.vue";
import LordIcons from "./components/SavePlanet/LordIcons.vue";
import SummerSportVue from "./components/SummerSportMain.vue";
import HeadDownVue from "./components/SummerSport/HeadDown.vue";
import GeneraBody from "./components/SummerSport/GeneralBody.vue";
import LeftBody from "./components/SummerSport/LeftBar.vue";
import SavePlanetMainVue from "./components/SavePlanetMain.vue";
import Weather from './components/SummerSport/Weather.vue'
import SingUp from "./components/SummerSport/SingUp.vue";
import LoginIn from "./components/SummerSport/LoginIn.vue";

// import "./assets/main.css";
const app = createApp(Main);
app.use(router);
app.mount("#app");
app.component("PoorAnimals", PoorAnimals);
app.component("TopUp", TopUp);
app.component("Logo", Logo);
app.component("WaysToSave", WaysToSave);
app.component("SlideBar ", SlideBar);
app.component("AnForm", AnForm);
app.component("FooterDown", FooterDown);
app.component("LordIcons", LordIcons);
app.component("SummerSportVue", SummerSportVue);
app.component("HeadDownVue", HeadDownVue);
app.component("GeneraBody ", GeneraBody);
app.component("LeftBody", LeftBody);
app.component("SavePlanetMainVue", SavePlanetMainVue);
app.component("Weather", Weather)
app.component("SingUp", SingUp)
app.component("LoginIn", LoginIn)

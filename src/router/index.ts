import { createRouter, createWebHistory } from "vue-router";
import SavePlanetMain from "@/components/SavePlanetMain.vue";
import SummerSport from "@/components/SummerSportMain.vue";
import "animate.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/SavePlanet",
      name: "SavePlanet",
      component: SavePlanetMain,
      meta: {
        leaveClass: "animate__animated animate__fadeOutLeft",
        enterClass: "animate__animated animate__fadeInRight",
      },
    },
    {
      path: "/",
      name: "SummerSport",
      component: SummerSport,
      meta: {
        leaveClass: "animate__animated animate__fadeOutLeft",
        enterClass: "animate__animated animate__fadeInRight",
      },
    },
  ],
});
export default router;

<template>
  <div class="WeatherContainer">
    <div class="headContainer">
      <h1>{{ WeatherCountry }}</h1>
      <p id="date">{{ WeatherDate }}</p>
      <img :src="`${WeatherIcon}`" />
      <p id="currentCel">{{ WeatherCel + "°C" }}</p>
      <p>{{ "High: " + WeatherCelHigh + "°C" }}</p>
      <p>{{ "Low: " + WeatherCelLow + "°C" }}</p>
      <p id="condition">{{ WeatherCondition }}</p>
    </div>
    <div class="trowError" v-if="trowError">
      <p>Loading data...</p>
      <span class="loader"></span>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTime } from "vue-timer-hook";
import { useStopwatch } from "vue-timer-hook";
export default defineComponent({
  data() {
    return {
      ApiRequest: undefined as any,
      WeatherIcon: undefined,
      WeatherCountry: undefined,
      WeatherCel: undefined,
      WeatherCelHigh: undefined,
      WeatherCelLow: undefined,
      WeatherCondition: undefined,
      WeatherDate: undefined,
      trowError: true,
      latitude: undefined,
      longitude: undefined,
      acceptGPS: false,
      time: useStopwatch(0, false),
    };
  },
  methods: {},

  created() {},
  mounted() {
    const successCallback = (position: any) => {
      this.acceptGPS = true;
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=37d63f8db6f547a8a92100230231402&q=" +
          this.latitude +
          "," +
          this.longitude,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            this.trowError = true;
            this.time.start();
          } else {
            this.ApiRequest = data;
            this.trowError = false;
          }
        })
        .then(() => {
          this.WeatherIcon =
            this.ApiRequest?.forecast.forecastday[0].day.condition.icon;
          this.WeatherCountry = this.ApiRequest?.location.name;
          this.WeatherCel = this.ApiRequest?.current.temp_c;
          this.WeatherCondition =
            this.ApiRequest?.forecast.forecastday[0].day.condition.text;
          this.WeatherDate = this.ApiRequest?.forecast.forecastday[0].date;
          this.WeatherCelHigh =
            this.ApiRequest?.forecast.forecastday[0].day.maxtemp_c;
          this.WeatherCelLow =
            this.ApiRequest?.forecast.forecastday[0].day.mintemp_c;
        });
    };

    const errorCallback = () => {
      fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=37d63f8db6f547a8a92100230231402&q=London&days=1&aqi=no&alerts=no",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            this.trowError = true;
            this.time.start();
          } else {
            this.ApiRequest = data;
            this.trowError = false;
          }
        })
        .then(() => {
          this.WeatherIcon =
            this.ApiRequest?.forecast.forecastday[0].day.condition.icon;
          this.WeatherCountry = this.ApiRequest?.location.name;
          this.WeatherCel = this.ApiRequest?.current.temp_c;
          this.WeatherCondition =
            this.ApiRequest?.forecast.forecastday[0].day.condition.text;
          this.WeatherDate = this.ApiRequest?.forecast.forecastday[0].date;
          this.WeatherCelHigh =
            this.ApiRequest?.forecast.forecastday[0].day.maxtemp_c;
          this.WeatherCelLow =
            this.ApiRequest?.forecast.forecastday[0].day.mintemp_c;
        });
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200;300&display=swap");
.WeatherContainer {
  display: grid;
  margin: 0 auto;
  padding: 0;
  width: 200px;
  height: 300px;
  border-radius: 25px;
  grid-template-rows: 1fr 0.1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: rgb(195, 202, 232);
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.headContainer {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  position: relative;
}
.headContainer > p,
h1 {
  margin: 0;
  padding: 2px;
}
.headContainer > h1 {
  font-size: 1.5em;
  align-self: flex-end;
  font-family: "Kanit", sans-serif;
}
.headContainer > p {
  font-size: 1em;
  font-family: "Kanit", sans-serif;
}
#currentCel {
  align-self: flex-start;
  font-size: 1.3em;
}
#date {
  align-self: flex-start;
  font-size: 0.5em;
}
#condition {
  margin-top: 20px;
}
.trowError {
  width: 200px;
  height: 300px;
  background-color: rgb(195, 202, 232);
  border-radius: 25px;
  position: absolute;
}
.crashWeather {
  background-color: red;
}
.trowError > p {
  font-size: 1em;
  font-family: "Kanit", sans-serif;
  text-align: center;
  margin-top: 40px;
}
.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin: 50px auto;
  background-image: radial-gradient(
      circle 25px at 25px 25px,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),
    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
    linear-gradient(#fff 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: "";
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-top-color: #ff3d00;
  box-sizing: border-box;
  animation: fadePush 1s linear infinite;
}
.loader::before {
  content: "";
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 15px;
  background: #ff3d00;
  box-sizing: border-box;
  animation: fadePush 1s linear infinite;
}

@keyframes fadePush {
  0% {
    transform: translate(-50%, -15px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 0px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 15px);
    opacity: 0;
  }
}
</style>

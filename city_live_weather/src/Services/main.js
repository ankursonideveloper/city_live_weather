import { WeatherAPI } from "./WeatherAPI.js";

let obj = new WeatherAPI('konch');
await obj.getCurrentWeather();
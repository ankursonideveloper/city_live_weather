import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const apiKey = process.env.WEATHER_API_KEY;
console.log(`apiKey: ${apiKey}`);
const baseUrl = process.env.WEATHER_API_BASE_URL;

export class WeatherAPI {
    constructor(cityName) {
        this.cityName = cityName
    }

    getCurrentWeather = async() =>{
        const url = `${baseUrl}/current.json?q=${this.cityName}&key=${apiKey}`;
        let response = await axios.get(url);
        console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
  }
}


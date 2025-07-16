require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;
const baseUrl = process.env.WEATHER_API_BASE_URL;

class WeatherAPI {
    constructor(cityName) {
        this.cityName = cityName
    }

    getCurrentWeather = async() =>{
        const params = {q: this.cityName, key: apiKey};
        const url = `/${baseUrl}current.json`;

  }

}
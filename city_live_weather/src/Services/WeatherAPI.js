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
            try{
                const url = `${baseUrl}/current.json?q=${this.cityName}&key=${apiKey}`;
                let response = await axios.get(url);
                if (response.status == 200) {return {success: true, data: response.data }} else  return {success: false, error: response.error.message }
            }
            catch(err){
                console.error(`Error in WeatherAPI: ${err.stack}`);
                throw err.message;
            }
        }
}


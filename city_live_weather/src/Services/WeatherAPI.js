import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;

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


import { WeatherAPI } from "../Services/WeatherAPI.js"

export const getRequiredWeatherData = async (city) =>{
    try{
        let newCity = new WeatherAPI(city);
        let res = await newCity.getCurrentWeather();
        
        if (res.success){
            res = res.data;
            return {
                success: true,
                city: `${res.location.name}, ${res.location.region}, ${res.location.country}`,
                tempreature: res.current.temp_c,
                condition: res.current.condition.text,
                feelsLike: res.current.feelslike_c,
                windSpeed: res.current.wind_kph,
                iconLink: res.current.condition.icon
            };
        }
        return {success: false, error: res.error};
    }
    catch(err){
        return {success: false, error: err.message};
    }
}
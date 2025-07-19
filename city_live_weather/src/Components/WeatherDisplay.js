import React, { useEffect, useState, useRef } from 'react';
import { getRequiredWeatherData } from '../UtilityFunctions/getRequiredWeatherData.js';

const WeatherDisplay = () => {
    const inputRef = useRef(null);
    const [inputCity, setInputCity] = useState();
    const [callWeatherAPI, setCallWeatherAPI] = useState(false);
    const [weatherDetails, setWeatherDetails] = useState();

    const handleChange = async (event) =>{
        const firstValue = event.target.value;
        let timer = setTimeout(()=>{ 
            if (firstValue == inputRef.current.value){
                setCallWeatherAPI(true);
            }
        },2000);
        clearTimeout(timer);
    }

    useEffect(async()=>{
        if (callWeatherAPI){ 
            let newWeatherInformation = await getRequiredWeatherData(inputRef.current.value);
            setWeatherDetails(newWeatherInformation);
            setInputCity(weatherDetails.city);
            setCallWeatherAPI(false);
            }
    }, [callWeatherAPI]);

    return (
        <div>
            <input ref={inputRef} value={inputCity} onChange={(event)=>{handleChange(event)}}></input>
            <div>
                    <p>{weatherDetails.city}</p>
                    <p>{weatherDetails.tempreature}</p>
                    <p>{weatherDetails.condition}</p>
                    <p>{weatherDetails.feelsLike}</p>
                    <p>{weatherDetails.windSpeed}</p>
            </div>
        </div>
    )
}

export default WeatherDisplay

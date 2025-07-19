import React, { useEffect, useState, useRef } from "react";
import { getRequiredWeatherData } from "../UtilityFunctions/getRequiredWeatherData.js";

const WeatherDisplay = () => {
  const inputRef = useRef(null);
  const [inputCity, setInputCity] = useState("");
  const [callWeatherAPI, setCallWeatherAPI] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState({
    city: "",
    tempreature: "",
    condition: "",
    feelsLike: "",
    windSpeed: "",
  });
  let timer = null;

  const handleChange = async (event) => {
    setInputCity(event.target.value);
    const firstValue = event.target.value;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if( firstValue === ''){setWeatherDetails({
    city: "",
    tempreature: "",
    condition: "",
    feelsLike: "",
    windSpeed: "",
  })}
      else if (firstValue == inputRef.current.value) {
        setCallWeatherAPI(true);
      }
    }, 1000);
  };

  const callAPI = async () => {
    if (callWeatherAPI) {
      let newWeatherInformation = await getRequiredWeatherData(
        inputRef.current.value
      );
      setWeatherDetails(newWeatherInformation);
      setCallWeatherAPI(false);
    }
  };

  useEffect(() => {
    callAPI();
  }, [callWeatherAPI]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Weather Info
        </h1>
        <input
          ref={inputRef}
          value={inputCity}
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="Enter City"
          className="w-full px-4 py-2 mb-6 text-lg border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="space-y-3 text-gray-800">
          <p>
            <span className="font-semibold">City:</span> {weatherDetails.city}
          </p>
          <p>
            <span className="font-semibold">Temperature:</span>{" "}
            {weatherDetails.tempreature}{" "} {weatherDetails.tempreature ? <>&deg;C</> : ""}
          </p>
          <p>
            <span className="font-semibold">Condition:</span>{" "}
            {weatherDetails.condition}
          </p>
          <p>
            <span className="font-semibold">Feels Like:</span>{" "}
            {weatherDetails.feelsLike}{" "} {weatherDetails.feelsLike ? <>&deg;C</> : ""}
          </p>
          <p>
            <span className="font-semibold">Wind Speed:</span>{" "}
            {weatherDetails.windSpeed}{" "}{weatherDetails.windSpeed ? "Km/h": ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

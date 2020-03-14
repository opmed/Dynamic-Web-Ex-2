import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

import Header from "../Components/Header";
import WeatherImage from "../Components/WeatherImage";


//API Key
const defaultKey = "f91f83e1b6b389ae69819bdb9b3fb8b7";


function Home() {

	const [weatherData, setWeatherData] = useState({});
	const [city, setCity] = useState(null);

  const [CurrentTemperature, setCurrentTemperature] = useState("");
  const [highTemperature, setHighTemperature] = useState("");
  const [lowTemperature, setLowTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [cloudiness, setCloudiness] = useState(0);
  const [weatherType, setWeatherType] = useState("Clouds");

  let history=useHistory();

    useEffect(() => {
      //get city from url
      let searchParams=history.location.search;
      let urlParams = new URLSearchParams(searchParams);
      let city = urlParams.get("city");
      if (city) {
        setCity(city);
      }
    }, [history])

    useEffect(() => {

    //make request for the weather by city
    	axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`)
   .then(function (response) {
    // handle success
    console.log(response);
    setWeatherData(response.data);
  })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}, [city]);

useEffect(() => {
  if (weatherData.main) {
    setCurrentTemperature(weatherData.main.temp);
    setHighTemperature(weatherData.main.high_temp);
    setLowTemperature(weatherData.main.low_temp);

    let cloudinessValue = weatherData.clouds.all / 200;
    setCloudiness(cloudinessValue);

    setHumidity(weatherData.main.humidity);
    setWindSpeed(weatherData.wind.speed);

    setWeatherType(weatherData.weather[0].main);
  }
}, [weatherData]);


return (
 <div 
    className="SiteWrapper"
    style={{backgroundColor: `rgb(0,0,0,${cloudiness})`}}
    > 
     <Header />

     <div className="Home">
        <h1>Weather in {city}</h1>
        <div className="WeatherInfo">
           <WeatherImage weatherType={weatherType} />
           <div className="WeatherInfo_Data">
              <div className="CurrentTemperature">
                <p className="CurrentTemperature_Temp">
                   {CurrentTemperature}&#176;
                </p>
                <p className="CurrentTemperatureLabel">Current Temperature</p>
              </div>
           </div>
        </div>


        <div className="WeatherInfo_Image">
           <img src="" alt=""/>
        </div>
      



     <div className="WeatherInfo_Data">

         <div className="CurrentTemperature">
              <h2 className="CurrentTemperatureTemp">{weatherData.main && weatherData.main.temp}&#8451;</h2>
              <p className="CurrentTemperatureLabel">Current Temperature</p>
         </div>
         
         <div className="OtherTemperatures">
           <p>High Temp: {weatherData.main && weatherData.main.temp_max}&#8451;</p>
           <p>Low Temp: {weatherData.main && weatherData.main.temp_min}&#8451;</p>
         </div>

         <p>Humidity: {weatherData.main && weatherData.main.humidity}%</p>
         <p>Wind: {weatherData.main && weatherData.main.pressure}mph</p>
     </div>

  </div>
  </div>

	)
}

export default Home;



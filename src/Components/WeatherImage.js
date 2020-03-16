import React from "react";

import Header from "../Components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faCloud,
	faCloudRain,
	faSun,
	faSmog,
	faRainbow
} from "@fortawesome/free-solid-svg-icons";


const Icon = ({weathertype}) => {
	switch (weathertype) {

		case "Clouds":
		   return <FontAwesomeIcon icon={faCloud} />;

		case "Rainy":
		   return <FontAwesomeIcon icon={faCloudRain} />;

		case "Clear":
		   return <FontAwesomeIcon icon={faSun} />;

		case "Mist":
		   return <FontAwesomeIcon icon={faSmog} />; 

		default:
		   return <FontAwesomeIcon icon={faRainbow} />;
	}
};

function WeatherImage({weathertype}) {
	return (
		<div className="weatherInfo_Image">
		  <icon weathertype={weathertype} />
		</div>
	);
}

export default WeatherImage;

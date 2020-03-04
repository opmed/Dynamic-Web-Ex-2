import React from 'react'
import axios from 'axios'


function Header() {
	return (
     
      <div className="Home">
         <h1>Weather in City</h1>
      </div>
       

       <div className="WeatherInfo">
           Weather in "City"
       </div>


       <div className="WeatherInfo_Image">
           <img src="" alt=""/>
       </div>



     <div className="WeatherInfo_Data">

         <div className="CurrentTemperature">
              <h2 className"CureentTemperatureTemp">48%#174</h2>
              <p className"CureentTemperatureLabel">Current Temperature</p>
         </div>
         
         <div className="OtherTemperatures">
           <p>High Temp: 53</p>
           <p>Low Temp: 32</p>
         </div>

         <p>Humidity: 100%</p>
         <p>Wind: 10mph</p>
     </div>


	)
}

export default Home;


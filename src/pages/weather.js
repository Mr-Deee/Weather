import React from "react"
import  '../index.css'
import '../pages/weather.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar";


const api = {
    key: "ea2750f438aa72263c93000a77f10c8e",
    base: "https://api.openweathermap.org/data/2.5/",
  };
function Weather(){
  const navigate = useNavigate();
  const FxPage = () => {
    navigate("/Fx")
}



    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
  
    /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
    const searchPressed = () => {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    };
    return (
     
      
  
    
          <div className="App-header">

    
            <div class="card">
            <div class="pagetitle">
                        <h1>Weather</h1>   </div>
            <div class="card__cover">
            <div className="centered-container">
              <input
              className="searchbox"
                type="text"
                placeholder="Enter city/town..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={searchPressed} className="searchbtn">Search</button></div>
            </div>
    
            {/* If weather is not undefined display results from API */}
            {typeof weather.main !== "undefined" ? (
              <div class="card__content">
                {/* Location  */}
                <div className="weathername">
                <p>{weather.name}</p>
               <p>{weather.main.temp}°C</p>
                 
                {/* Condition (Sunny ) */}
                <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
    </div>
                {/* Temperature Celsius  */}
                
                {/* Condition (Sunny ) */}
               
                {/* <p>({weather.weather[0].description})</p> */}
              </div>
            ) : (
              ""
            )}


</div>
          </div>


      );

  


}
export default Weather;
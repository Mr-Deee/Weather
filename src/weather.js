import React from "react"
import  './index.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar";


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

        <Navbar/>
            {/* HEADER  */}
            <h1>Weather</h1>
    
            {/* Search Box - Input + Button  */}
            <div>
              <input
                type="text"
                placeholder="Enter city/town..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={searchPressed}>Search</button>
            </div>
    
            {/* If weather is not undefined display results from API */}
            {typeof weather.main !== "undefined" ? (
              <div>
                {/* Location  */}
                <p>{weather.name}</p>
    
                {/* Temperature Celsius  */}
                <p>{weather.main.temp}°C</p>
    
                {/* Condition (Sunny ) */}
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
              </div>
            ) : (
              ""
            )}
            <button className="fxbtn" onClick={FxPage}><p>FX</p>
</button>




          </div>


      );

  


}
export default Weather;
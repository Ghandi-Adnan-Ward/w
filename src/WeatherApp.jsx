import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: 0,
        temp: 0,
        tempMax: 0,
        tempMin: 0,
        humidity: 0,
        weather: " ",
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); 
    }
    
  return (
    <div>
    <h2 style={{fontSize:'48px'}}>Weather App</h2>
    <SearchBox updateInfo={updateInfo}/> 
    <InfoBox  info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
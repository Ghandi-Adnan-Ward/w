import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Multan",
        feelsLike: 297.27,
        temp: 297.81,
        tempMax: 297.81,
        tempMin: 297.81,
        humidity: 36,
        weather: "Clear",
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); 
    }
    
  return (
    <div>
    <h2>WeatherApp By devAqsa</h2>
    <SearchBox updateInfo={updateInfo}/> 
    <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
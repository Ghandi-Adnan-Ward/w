/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function SearchBox({updateInfo}) { 
    let [city, setCity] = useState('');
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_kEY = "7db2108be8f9b821bda8b70ca32b7754";


    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_kEY}&units=matric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
          city :city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].main,

        }

        console.log(result);
        return result;
    }
    


let handleChange = (event) => {
    setCity(event.target.value);
}

let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo); 
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
    <br></br>
    <br></br>
    <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
    </div>
  )
}

export default SearchBox
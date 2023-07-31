/* import React, { useState } from "react";
import search from "./assests/search.png";
import humid from "./assests/humidity.png";
import wind from "./assests/wind.png";
import "./App.css";

const App = () => {
  const apikey = "e915d2a0d4e5c6eafb820ad5863a9d81";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city, setCity] = useState();
  const [weatherdata, setweatherdata] = useState();

  const handlesearch = async () => {
    try {
      const response = await fetch(apiUrl + city + ` &APPID=${apikey}`);
      const data = await response.json();
      setweatherdata(data);
    } catch (error) {
      console.log("error fetch", error);
    }
  };

  const handleinputchange = (event) => {
    setCity(event.target.value);
  };

  const renderweatherimage = () => {
    if (weatherdata) {
      switch (weatherdata.weather[0].main) {
        case "Clouds":
          return require("./assests/clouds.png");
        case "Clear":
          return require("./assests/clear.png");
        case "Rain":
          return require("./assests/rain.png");
        case "Drizzle":
          return require("./assests/drizzle.png");
        case "Mist":
          return require("./assests/mist.png");
        default:
          return require("./assests/clouds.png");
      }
    }
    return "";
  };

  return (
    <div>
      <div class={"card"}>
        <div class="Search">
          <button onClick={handlesearch}>
            <img src={search} alt="search" />
          </button>
          <input
            type="text"
            placeholder="type city name"
            value={city}
            onChange={handleinputchange}
          />
        </div>
        <div class="time">
          <p>{new Date().toLocaleTimeString()}</p>
        </div>

        <div class="Weather">
          <img src={renderweatherimage()} class="weather-img" alt="weather" />
          {weatherdata && (
            <>
              <h1 class="temp">{Math.round(weatherdata.main.temp)}°C</h1>
              <h2 class="city">{weatherdata.name}</h2>
              <div class="details">
                <div class="col1">
                  <img src={humid} alt="humicon" />
                  <div>
                    <p class="humid">{weatherdata.main.humidity}%</p>
                    <h3>Humidity</h3>
                  </div>
                </div>
                <div class="col1">
                  <img src={wind} alt="winicon" />
                  <div>
                    <p class="wind">{weatherdata.wind.speed}km/h</p>
                    <h3>Wind</h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;*/
import React, { useState, useEffect, useCallback } from "react";
import search from "./assests/search.png";
import humid from "./assests/humidity.png";
import wind from "./assests/wind.png";
import "./App.css";

const App = () => {
  const apikey = "e915d2a0d4e5c6eafb820ad5863a9d81";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city, setCity] = useState("Hyderabad");
  const [weatherdata, setWeatherData] = useState(null);

  const handleSearch = useCallback(async () => {
    try {
      const response = await fetch(apiUrl + city + `&APPID=${apikey}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("error fetch", error);
    }
  }, [city]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const renderWeatherImage = () => {
    if (weatherdata) {
      switch (weatherdata.weather[0]?.main) {
        case "Clouds":
          return require("./assests/clouds.png");
        case "Clear":
          return require("./assests/clear.png");
        case "Rain":
          return require("./assests/rain.png");
        case "Drizzle":
          return require("./assests/drizzle.png");
        case "Mist":
          return require("./assests/mist.png");
        default:
          return require("./assests/clouds.png");
      }
    }
    return "";
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch();
    };
    fetchData();
  }, [handleSearch]);

  return (
    <div>
      <div className={"card"}>
        <div className="Search">
          <button onClick={handleSearch}>
            <img src={search} alt="search" />
          </button>
          <input
            type="text"
            placeholder="type city name"
            value={city}
            onChange={handleInputChange}
          />
        </div>
        <div className="time">
          <p>{new Date().toLocaleTimeString()}</p>
        </div>

        <div className="Weather">
          <img
            src={renderWeatherImage()}
            className="weather-img"
            alt="weather"
          />
          {weatherdata && (
            <>
              <h1 className="temp">{Math.round(weatherdata.main.temp)}°C</h1>
              <h2 className="city">{weatherdata.name}</h2>
              <div className="details">
                <div className="col1">
                  <img src={humid} alt="humicon" />
                  <div>
                    <p className="humid">{weatherdata.main.humidity}%</p>
                    <h3>Humidity</h3>
                  </div>
                </div>
                <div className="col1">
                  <img src={wind} alt="winicon" />
                  <div>
                    <p className="wind">{weatherdata.wind.speed}km/h</p>
                    <h3>Wind</h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

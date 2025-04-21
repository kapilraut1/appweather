import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherdata, setWeatherdata] = useState(null);

  async function fetchWeather(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=6eb16a76a5365d21aa1f6cd6e0427c91`
      );
      const data = await response.json();
      if (data) {
        setWeatherdata(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  function handleSearch() {
    fetchWeather(search);
  }
  useEffect(() => {
    fetchWeather("bhaktapur");
  }, []);

  function getCurrentdate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherdata?.name},<span>{weatherdata?.sys?.country}</span>
            </h2>
          </div>
          <div className="name">
            <span>{getCurrentdate()}</span>
          </div>
          <div className="temp">
            <b>Temperature:{(weatherdata?.main?.temp - 273).toFixed(2)} C</b>
          </div>
          <p className="description">
            <b>Present Condition: </b>
            {weatherdata && weatherdata.weather && weatherdata.weather[0]
              ? weatherdata.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div>
              <p>Wind Speed</p>
              <p className="wind">{weatherdata?.wind?.speed}</p>
            </div>
              <div>
                <p>Humidity</p>
                <p className="wind">{weatherdata?.main?.humidity}</p>
              </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

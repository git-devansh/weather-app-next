import React from "react";
import styles from "./TodayWeather.module.css";
import moment from "moment-timezone";
import Image from "next/image";
import sunny from "../../public/images/sunny.jpg";
import cloudy from "../../public/images/cloudy.jpg";

function TodayWeather({ city, weather, timezone }) {
  console.log(weather.weather[0].main);

  const setImage = () => {
    const value = weather.weather[0].main;
    if (value === "Clouds") {
      return styles.cloudy;
    } else if (value === "Thunderstorm") {
      return styles.thunderstrom;
    } else if (value === "Drizzle") {
      return styles.drizzle;
    } else if (value === "Rain") {
      return styles.rain;
    } else if (value === "Snow") {
      return styles.snow;
    } else if (value === "Atmosphere") {
      return styles.atmosphere;
    }
  };

  return (
    <div className={`${styles.today} ${setImage()}`}>
      <div className={styles.todayinner}>
        <div className={styles.todayleftcontent}>
          <h1>
            {city.name}, {city.country}
          </h1>
          <h2>
            <span>{weather.temp.max.toFixed(0)}&deg;C</span>
            <span>{weather.temp.min.toFixed(0)}&deg;C</span>
          </h2>
          <div>
            <div className={styles.weatherimg}>
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
                layout="fill"
              />
            </div>
            <h2>{weather.weather[0].description}</h2>
          </div>
          <div className={styles.todaysuntimes}>
            <div>
              <span>Sunrise</span>
              <span>
                {moment.unix(weather.sunrise).tz(timezone).format("LT")}
              </span>
            </div>
            <div>
              <span>Sunset</span>
              <span>
                {moment.unix(weather.sunset).tz(timezone).format("LT")}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.todayrightcontent}>
          <h5>Humidity: {weather.humidity}%</h5>
          <h5>Wind: {weather.wind_speed} Km/h</h5>
          <h5>Pressure: {weather.pressure}mb</h5>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;

import moment from "moment-timezone";
import React from "react";
import styles from "./HourWeather.module.css";
import Image from "next/image";

function HourWeather({ hourWeather, timezone }) {
  console.log(hourWeather, timezone);
  return (
    <div className={styles.hour}>
      <div className={styles.hourinner}>
        {hourWeather.length > 0 &&
          hourWeather.map((weather, index) => (
            <div className={styles.hourboxwrapper} key={weather.dt}>
              <div className={styles.hourbox}>
                <span>{weather.temp.toFixed(0)}&deg;C</span>
                <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].description}
                  width="80"
                  height="80"
                />
                <span className={styles.hourtime}>
                  {index == 0
                    ? "Now"
                    : moment.unix(weather.dt).tz(timezone).format("LT")}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HourWeather;

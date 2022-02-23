import moment from "moment-timezone";
import React from "react";
import styles from "./WeeklyWeather.module.css";
import Image from "next/image";

function WeeklyWeather({ WeekWeather, timezone }) {
  return (
    <div className={styles.week}>
      <h1 className={styles.title}>Weather Weekly</h1>
      {WeekWeather.length > 0 &&
        WeekWeather.map((weather, index) => {
          if (index == 0) {
            return;
          }
          return (
            <div className={styles.weeklycard} key={index}>
              <div className={styles.weeklyinner}>
                <div className={styles.weeklyleft}>
                  <div>
                    <h3>
                      {moment.unix(weather.dt).tz(timezone).format("MMM Do")}
                    </h3>
                    <h4 className={styles.h4}>
                      <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                      <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                    </h4>
                  </div>
                  <div className={styles.weeksuntimes}>
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
                <div className={styles.weekright}>
                  <div className={styles.weekiconwrap}>
                    <div className={styles.image}>
                      <Image
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                  <h5>{weather.weather[0].description}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default WeeklyWeather;

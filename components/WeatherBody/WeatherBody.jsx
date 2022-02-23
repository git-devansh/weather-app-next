import React from "react";
import HourWeather from "../HourWeather/HourWeather";
import TodayWeather from "../TodayWeather/TodayWeather";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import styles from "./WeatherBody.module.css";

function WeatherBody(props) {
  return (
    <div className={styles.pagewrapper}>
      <div className={styles.container}>
        <TodayWeather
          city={props.city}
          weather={props.weather[0]}
          timezone={props.timezone}
        />
        <HourWeather
          hourWeather={props.hourWeather}
          timezone={props.timezone}
        />
        <WeeklyWeather WeekWeather={props.weather} timezone={props.timezone} />
      </div>
    </div>
  );
}

export default WeatherBody;

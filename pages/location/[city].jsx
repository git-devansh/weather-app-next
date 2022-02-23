import React from "react";
import cities from "../../lib/city.list.json";
import axios from "axios";
import Head from "next/head";
import WeatherBody from "../../components/WeatherBody/WeatherBody";
import moment from "moment-timezone";

export async function getServerSideProps(context) {
  const city = getCity(context.params.city);

  if (!city) {
    return {
      notFound: true,
    };
  }

  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  const hourlyData = getHourlyWeather(data.hourly, data.timezone);

  return {
    props: {
      city: city,
      timezone: data.timezone,
      currentWeather: data.current,
      dailyWeather: data.daily,
      hourlyData: hourlyData,
    },
  };
}

const getCity = (param) => {
  const splitCity = param.trim().split("-");
  const id = splitCity[splitCity.length - 1];
  if (!id) {
    return null;
  }
  const city = cities.find((city) => city.id.toString() == id);

  if (city) {
    return city;
  } else {
    return null;
  }
};

const getHourlyWeather = (hourData, timezone) => {
  const endOfDay = moment().tz(timezone).endOf("day").valueOf();
  const eod = Math.floor(endOfDay / 1000);
  const todayData = hourData.filter((data) => data.dt < eod);

  return todayData;
};

function City({ city, currentWeather, dailyWeather, hourlyData, timezone }) {
  return (
    <div>
      <Head>
        <title>{city.name} - Weather App</title>
      </Head>
      <WeatherBody
        city={city}
        weather={dailyWeather}
        timezone={timezone}
        hourWeather={hourlyData}
      />
    </div>
  );
}

export default City;

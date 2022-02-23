import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";
import cities from "../../lib/city.list.json";
import Search from "../UI/Search/Search";

function Form(props) {
  const [location, setLoction] = useState("");
  const [cityResults, setCityResults] = useState("");

  const onInputChange = (event) => {
    let value = event.target.value;
    setLoction(value);

    let matchingCities = [];
    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }
        const match = city.name.toLowerCase().startsWith(value.toLowerCase());
        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };
          matchingCities.push(cityData);
        }
      }
    }
    setCityResults(matchingCities);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!location || location.trim().length === 0) {
      return;
    }
    props.onSubmit(location);
  };

  return (
    <>
      <Search
        location={location}
        onInputChange={onInputChange}
        cityResults={cityResults}
      />
      {/* <Button type="submit">Forecast</Button> */}
    </>
  );
}

export default Form;

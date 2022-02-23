import React from "react";
import styles from "./Search.module.css";
import Link from "next/link";

function Search(props) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        aria-label="Location"
        placeholder="Search for location"
        className={styles.input}
        value={props.location}
        onChange={props.onInputChange}
        required
      />
      {props.location.length > 3 && (
        <ul className={styles.ul}>
          {props.cityResults.length > 0 ? (
            props.cityResults.map((city) => (
              <li key={city.slug}>
                <Link href={`/location/${city.slug}`}>
                  <a>
                    {city.name}
                    {city.state ? `, ${city.state}` : ""}
                    <span>({city.country})</span>
                  </a>
                </Link>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;

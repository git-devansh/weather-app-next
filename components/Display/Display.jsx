import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import styles from "./Display.module.css";

function Display() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Form />
      </div>
    </>
  );
}

export default Display;

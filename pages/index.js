import Head from "next/head";
import React from "react";

import Display from "../components/Display/Display";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - Next</title>
      </Head>
      <Display />
    </div>
  );
}

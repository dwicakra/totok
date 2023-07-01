import React from "react";
import { Helmet } from "react-helmet";
import TogelPage from "./tools/TogelPage";

function Togel() {
  return (
    <div>
      <Helmet>
        <title>Prediksi Masa Depan by ADSB</title>
        <meta
          name="description"
          content="Tetap utamakan prediksi sendiri, ini sebagai referensi"
        />
      </Helmet>
      <TogelPage />
    </div>
  );
}

export default Togel;

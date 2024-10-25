import "./CountryHero.scss";
import searchLogo from "../../assets/logos/search.svg";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import italyImage from "../../assets/photos/italy-2.avif";

const CountryHero = ({ countryName, countryImage }) => {
  return (
    <section
      className="country-hero"
      style={{
        backgroundImage: `url(${countryImage})`,
        height: "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      {/* <h1 className="hero__title">{messages[currentMessageIndex]}</h1> */}
      <h1 className="country-hero__title">{countryName.toUpperCase()}</h1>
    </section>
  );
};

export default CountryHero;

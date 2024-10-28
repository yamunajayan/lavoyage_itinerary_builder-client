import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import CountrySection from "../../components/CountrySection/CountrySection";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [countriesArray, setCountriesArray] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/countries`);
        setCountriesArray(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllCountries();
  }, []);

  return (
    <>
      <Hero countriesArray={countriesArray} />
      <CountrySection countriesArray={countriesArray} />
    </>
  );
};

export default HomePage;

import "./CountryDetailsPage.scss";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CountryHero from "../../components/CountryHero/CountryHero";
import CountryDetails from "../../components/CountryDetails/CountryDetails";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const CountryDetailsPage = () => {
  const { countryName } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/countries/${countryName}`
        );
        setSelectedCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountryDetails();
  }, []);

  return (
    <>
      <CountryHero
        countryName={countryName}
        countryImage={selectedCountry.country_image}
      />
      <CountryDetails selectedCountry={selectedCountry} />
    </>
  );
};

export default CountryDetailsPage;

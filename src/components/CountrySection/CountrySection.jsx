import "./CountrySection.scss";
import CountryCard from "../countryCard/countryCard";
import italyImage from "../../assets/photos/rome-2.jpeg";
import egyptImage from "../../assets/photos/Egypt-1.jpeg";
import franceImage from "../../assets/photos/France-2.jpeg";
import thailandImage from "../../assets/photos/Thailand-1.avif";
import indiaImage from "../../assets/photos/India-1.avif";
import baliImage from "../../assets/photos/Bali-1.webp";
import chevronRight from "../../assets/logos/chevron-right.svg";
import chevronLeft from "../../assets/logos/chevron-left.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CountrySection = () => {
  const [countriesArray, setCountriesArray] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  //   const countryNames = [
  //     "ITALY",
  //     "THAILAND",
  //     "INDIA",
  //     "EGYPT",
  //     "BALI",
  //     "FRANCE",
  //   ];
  //   const countryImages = [
  //     italyImage,
  //     thailandImage,
  //     indiaImage,
  //     egyptImage,
  //     baliImage,
  //     franceImage,
  //   ];

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/countries`);
        setCountriesArray(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCountries();
  }, []);

  if (countriesArray) {
    console.log(countriesArray);
  }

  return (
    <section className="country-section">
      <h2 className="country-title">Most Popular Travel Destinations</h2>
      <ul className="country-section__list">
        {countriesArray.map((country) => {
          return (
            <li key={country.id} className="country-section__item">
              <Link to={`/countries/${country.country_name}`}>
                <CountryCard
                  countryName={country.country_name}
                  countryImage={country.country_image}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CountrySection;

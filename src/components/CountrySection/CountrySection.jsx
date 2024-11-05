import "./CountrySection.scss";
import CountryCard from "../CountryCard/CountryCard";
import { Link } from "react-router-dom";

const CountrySection = ({ countriesArray }) => {
  return (
    <section className="country-section">
      <h2 className="country-section__title">
        Most Popular Travel Destinations
      </h2>
      <ul className="country-section__list">
        {countriesArray.map((country) => {
          return (
            <li key={country.id} className="country-section__item">
              <Link to={`/countries/${country.country_name}`}>
                <CountryCard
                  countryName={country.country_name}
                  countryImage={`${process.env.VITE_BASE_URL}${country.country_image}`}
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

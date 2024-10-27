import "./CountrySection.scss";
import CountryCard from "../countryCard/countryCard";
import chevronRight from "../../assets/logos/chevron-right.svg";
import chevronLeft from "../../assets/logos/chevron-left.svg";
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

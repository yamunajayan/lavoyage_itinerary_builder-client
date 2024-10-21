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

const CountrySection = () => {
  const countryNames = [
    "ITALY",
    "THAILAND",
    "INDIA",
    "EGYPT",
    "BALI",
    "FRANCE",
  ];
  const countryImages = [
    italyImage,
    thailandImage,
    indiaImage,
    egyptImage,
    baliImage,
    franceImage,
  ];
  return (
    <section className="country-section">
      <h2 className="country-title">Most Popular Travel Destinations</h2>
      <ul className="country-section__list">
        {countryNames.map((country, index) => {
          return (
            <li key={country} className="country-section__item">
              <Link to={`/countries/${country}`}>
                <CountryCard
                  countryName={country}
                  countryImage={countryImages[index]}
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

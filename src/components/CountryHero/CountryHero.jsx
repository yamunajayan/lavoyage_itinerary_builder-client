import "./CountryHero.scss";
import Header from "../Header/Header";

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
      <h1 className="country-hero__title">{countryName.toUpperCase()}</h1>
    </section>
  );
};

export default CountryHero;

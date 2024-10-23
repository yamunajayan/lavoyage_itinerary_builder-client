import CityDetails from "../CityDetails/CityDetails";
import "./CountryDetails.scss";
const CountryDetails = ({ selectedCountry }) => {
  const countryDescription =
    "Italy is best known for its rich cultural heritage, iconic art, and delicious cuisine. From the breathtaking architecture of  Rome to amazing vineyards of Tuscany to the picturesque canals of Venice, it offers a blend of history and beauty. Additionally, Italy's world-renowned dishes  like pizza, pasta, and gelato make it a top  destination for food lovers.";
  return (
    <section className="country-details">
      <div className="country-details__details">
        <h4 className="country-details__description">
          " {selectedCountry.country_description} "
        </h4>
      </div>
      <CityDetails cities={selectedCountry.cities} />
    </section>
  );
};

export default CountryDetails;

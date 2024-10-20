import "./CountryCard.scss";

const CountryCard = ({ countryName, countryImage }) => {
  return (
    <article className="country-card">
      <img
        src={countryImage}
        alt="country image"
        className="country-card__image"
      />
      <div className="country-card__details">
        <h3 className="country-card__title">{countryName}</h3>
      </div>
    </article>
  );
};

export default CountryCard;

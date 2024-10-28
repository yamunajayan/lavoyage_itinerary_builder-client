import "./CityDetails.scss";
import CountryCard from "../countryCard/countryCard";
import { useState } from "react";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
import errorLogo from "../../assets/logos/error-24px.svg";

const CityDetails = ({ cities, getItineraryDetails, setSelectedMarkers }) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [markerList, setMarkeList] = useState([]);
  const [error, setError] = useState("");

  const getItineraryQuery = (itineraryFormObject) => {
    if (selectedCities.length === 0) {
      //   alert("select atleast one city");
      setError("Please setect atleast one city");
      return;
    } else {
      setError("");
      const updatedItineraryObject = {
        ...itineraryFormObject,
        cities_included: selectedCities,
      };
      getItineraryDetails(updatedItineraryObject);
      setSelectedMarkers(markerList);
    }
  };

  const handleCitySelection = (event, city) => {
    if (event.target.checked) {
      setSelectedCities((prevCities) => [...prevCities, city.city_name]);
      setMarkeList((prevMarkers) => [
        ...prevMarkers,
        {
          lat: city.latitude,
          lon: city.longitude,
          name: city.city_name,
        },
      ]);
    } else {
      setSelectedCities((prevCities) =>
        prevCities.filter(
          (selectedCity) =>
            selectedCity.toLowerCase() !== city.city_name.toLowerCase()
        )
      );
      setMarkeList((prevMarkers) =>
        prevMarkers.filter(
          (marker) => marker.name.toLowerCase() !== city.city_name.toLowerCase()
        )
      );
    }
  };

  return (
    <section className="city-details">
      <article className="city-details__itinerary">
        <h2 className="city-details__title">
          Let's create the perfect itinerary just for you.
        </h2>
        <ItineraryForm getItineraryQuery={getItineraryQuery} />
      </article>
      {error && (
        <div className="city-details__error-box">
          <img src={errorLogo} alt="error logo" />
          <h4 className="city-details__error">{error}</h4>
        </div>
      )}
      <h3 className="city-details__title">
        Select the cities you want to visit
      </h3>
      {cities && cities.length > 0 && (
        <ul className="city-details__list">
          {cities.map((city) => {
            if (!city) return null;
            return (
              <li key={city.city_name} className="city-details__item">
                <div className="city-details__image-box">
                  <CountryCard
                    countryName={city.city_name}
                    countryImage={city.city_image}
                  />
                </div>
                <article className="city-details__details">
                  <p className="city-details__info">{city.city_description}</p>
                  <p className="city-details__info city-details__info--days">
                    Days to spend : {city.days_to_spend}
                  </p>
                  {/* Checkbox for selection */}
                  <div className="city-details__select">
                    <label>
                      <input
                        type="checkbox"
                        className="city-details__input"
                        value={city.cityName}
                        onChange={(e) => handleCitySelection(e, city)}
                      />
                      {/* Select {city.cityName} */}
                    </label>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
      <hr />
    </section>
  );
};

export default CityDetails;

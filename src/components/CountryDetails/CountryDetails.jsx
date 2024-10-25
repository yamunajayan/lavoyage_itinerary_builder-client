import { useEffect, useState } from "react";
import CityDetails from "../CityDetails/CityDetails";
import ItineraryDetails from "../ItineraryDetails/ItineraryDetails";
import "./CountryDetails.scss";
import axios from "axios";
import { useRef } from "react";
import loadingImage from "../../assets/logos/loading.svg";

const CountryDetails = ({ selectedCountry }) => {
  const countryName = selectedCountry.country_name;
  const targetDivRef = useRef(null);
  const [itineraryList, setItineraryList] = useState({});
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [countryCoordinates, setCountryCoordinates] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  const getItineraryDetails = async (updatedItineraryObject) => {
    // scrollToDiv();
    // setShowLoading(true);
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(
        `${BASE_URL}/countries/${countryName}`,
        updatedItineraryObject
      );
      console.log(response.data);
      setItineraryList(response.data.itinerary);
      console.log(response.data.itinerary);
    } catch (error) {
      console.error(error);
    }
  };

  const scrollToDiv = () => {
    targetDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setCountryCoordinates({
      lat: selectedCountry.latitude,
      lon: selectedCountry.longitude,
    });
  }, [selectedCountry]);

  console.log(countryCoordinates);

  return (
    <section className="country-details">
      <div className="country-details__details">
        <h4 className="country-details__description">
          " {selectedCountry.country_description} "
        </h4>
        <div className="">
          <h4 className="country-details__budget">
            Approximate budget for 7 day travel :
            {selectedCountry.budget_7_days_usd}
          </h4>
        </div>
        <div className="country-details__best-months">
          <h3>Best months to visit:</h3>
          {selectedCountry.best_months_to_visit &&
            selectedCountry.best_months_to_visit.length > 0 && (
              <div className="country-details__months-container">
                {selectedCountry.best_months_to_visit.map((month, index) => (
                  <div key={index} className="country-details__best-month">
                    {month}
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
      <CityDetails
        cities={selectedCountry.cities}
        getItineraryDetails={getItineraryDetails}
        setSelectedMarkers={setSelectedMarkers}
      />
      <div ref={targetDivRef} id="target-div">
        {itineraryList && itineraryList.length > 0 ? (
          <ItineraryDetails
            itineraryList={itineraryList}
            countryName={countryName}
            selectedMarkers={selectedMarkers}
            countryCoordinates={countryCoordinates}
          />
        ) : (
          <img
            src={loadingImage}
            alt="loading image"
            className={
              showLoading
                ? "country-details__loading-image"
                : "country-details__loading-image--noshow"
            }
          />
        )}
      </div>
    </section>
  );
};

export default CountryDetails;

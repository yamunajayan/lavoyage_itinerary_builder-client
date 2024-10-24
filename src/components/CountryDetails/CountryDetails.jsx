import { useEffect, useState } from "react";
import CityDetails from "../CityDetails/CityDetails";
import ItineraryDetails from "../ItineraryDetails/ItineraryDetails";
import "./CountryDetails.scss";
import axios from "axios";
import { useRef } from "react";

const CountryDetails = ({ selectedCountry }) => {
  const countryName = selectedCountry.country_name;
  const targetDivRef = useRef(null);
  const [itineraryList, setItineraryList] = useState({});
  const [selectedMarkers, setSelectedMarkers] = useState([]);
  const [countryCoordinates, setCountryCoordinates] = useState({});

  const getItineraryDetails = async (updatedItineraryObject) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(
        `${BASE_URL}/countries/${countryName}`,
        updatedItineraryObject
      );
      console.log(response.data);
      setItineraryList(response.data.itinerary);
      console.log(response.data.itinerary);
      scrollToDiv();
    } catch (error) {
      console.error(error);
    }
  };

  const scrollToDiv = () => {
    targetDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // console.log(selectedCountry);
    // console.log(selectedCountry.latitude);
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
      </div>
      <CityDetails
        cities={selectedCountry.cities}
        getItineraryDetails={getItineraryDetails}
        setSelectedMarkers={setSelectedMarkers}
      />
      <div ref={targetDivRef} id="target-div">
        {itineraryList && itineraryList.length > 0 && (
          <ItineraryDetails
            itineraryList={itineraryList}
            countryName={countryName}
            selectedMarkers={selectedMarkers}
            countryCoordinates={countryCoordinates}
          />
        )}
      </div>
    </section>
  );
};

export default CountryDetails;

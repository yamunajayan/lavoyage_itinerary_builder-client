import "./ItineraryDetails.scss";
import { useState } from "react";
import { italyTrip } from "../../utils/countryItineraryDetails";
import MapComponent from "../MapComponent/MapComponent";

const ItineraryDetails = ({ countryName }) => {
  console.log(italyTrip);
  const countryItinerary = italyTrip.itinerary;
  console.log(countryItinerary);
  const [itinerary, setItinerary] = useState(countryItinerary);
  return (
    <section className="itinerary-details">
      <h2 className="itinerary-details__title">
        7 Days {countryName} Travel Itinerary
      </h2>
      <div className="itinerary-details__container">
        <ul className="itinerary-details__list">
          {itinerary.map((item, index) => (
            <li key={item.day} className="itinerary-details__item">
              <div className="itinerary-details__bubble">
                {item.day}
                <div className="itinerary-details__horizontal-line" />
              </div>
              <article className="itinerary-details__day-info">
                <h3>Day {item.day}</h3>
                <p>{item.plan}</p>
                <p>
                  <strong>Transportation:</strong> {item.transportation}
                </p>
              </article>
              {index < itinerary.length - 1 && (
                <div className="itinerary-details__vertical-line" />
              )}
            </li>
          ))}
        </ul>
        <div className="itinerary-details__map">
          <MapComponent />
        </div>
      </div>
    </section>
  );
};

export default ItineraryDetails;

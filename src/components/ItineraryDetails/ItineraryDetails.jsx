import "./ItineraryDetails.scss";
import { useState } from "react";
import { italyTrip } from "../../utils/countryItineraryDetails";

const ItineraryDetails = ({ countryName }) => {
  console.log(italyTrip);
  const countryItinerary = italyTrip.itinerary;
  console.log(countryItinerary);
  const [itinerary, setItinerary] = useState(countryItinerary);
  return (
    <section className="itinerary-details">
      <h2 className="itinerary-details__title">
        5 Days {countryName} Travel Itinerary
      </h2>
      <ul className="itinerary-details__container">
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
    </section>
  );
};

export default ItineraryDetails;

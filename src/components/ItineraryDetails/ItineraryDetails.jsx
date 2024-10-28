import "./ItineraryDetails.scss";
import MapComponent from "../MapComponent/MapComponent";

const ItineraryDetails = ({
  itineraryList,
  countryName,
  selectedMarkers,
  countryCoordinates,
}) => {
  return (
    <section className="itinerary-details">
      {itineraryList && itineraryList.length > 0 ? (
        <div>
          <h2 className="itinerary-details__title">
            {itineraryList.length} Days {countryName} Travel Itinerary
          </h2>
          <div className="itinerary-details__container">
            <ul className="itinerary-details__list">
              {itineraryList.map((item, index) => (
                <li key={item.day} className="itinerary-details__item">
                  <div className="itinerary-details__bubble">
                    {item.day}
                    <div className="itinerary-details__horizontal-line" />
                  </div>
                  <article className="itinerary-details__day-info">
                    <h3 className="itinerary-details__heading">
                      Day {item.day}
                    </h3>
                    <p>{item.plan}</p>
                    <p>
                      <strong>Transportation:</strong> {item.transportation}
                    </p>
                  </article>
                  {index < itineraryList.length - 1 && (
                    <div className="itinerary-details__vertical-line" />
                  )}
                </li>
              ))}
            </ul>
            <div className="itinerary-details__map">
              <MapComponent
                selectedMarkers={selectedMarkers}
                countryCoordinates={countryCoordinates}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </section>
  );
};

export default ItineraryDetails;

import "./ItineraryForm.scss";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
const ItineraryForm = ({ getItineraryQuery }) => {
  const { countryName } = useParams();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const itineraryObject = {
      number_of_days: Number(formRef.current.numberOfDays.value),
      travel_by: formRef.current.travelBy.value,
      month: formRef.current.month.value,
    };
    getItineraryQuery(itineraryObject);
  };
  return (
    <form className="itinerary-form" ref={formRef} onSubmit={handleFormSubmit}>
      <input
        placeholder="Number of days"
        className="itinerary-form__input"
        name="numberOfDays"
      />
      <select className="itinerary-form__input" defaultValue="" name="travelBy">
        <option value="" disabled>
          Travel By
        </option>
        <option value="public transport">Public Transport</option>
        <option value="car">Car</option>
      </select>
      <select className="itinerary-form__input" defaultValue="" name="month">
        <option value="" disabled>
          Month
        </option>
        {months.map((month) => (
          <option key={month.toLowerCase()} value={month.toLowerCase()}>
            {month}
          </option>
        ))}
      </select>
      <button type="submit">Build Itinerary</button>
    </form>
  );
};

export default ItineraryForm;

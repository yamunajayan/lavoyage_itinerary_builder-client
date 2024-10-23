import "./ItineraryForm.scss";
import { Link, useParams } from "react-router-dom";
const ItineraryForm = () => {
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
  return (
    <form className="itinerary-form">
      <input placeholder="Number of days" className="itinerary-form__input" />
      <select className="itinerary-form__input" defaultValue="">
        <option value="" disabled>
          Travel By
        </option>
        <option value="public transport">Public Transport</option>
        <option value="car">Car</option>
      </select>
      <select className="itinerary-form__input" defaultValue="">
        <option value="" disabled>
          Month
        </option>
        {months.map((month) => (
          <option key={month.toLowerCase()} value={month.toLowerCase()}>
            {month}
          </option>
        ))}
      </select>
      <Link to={`/countries/${countryName}/itinerary`}>
        <button type="submit">Build Itinerary</button>
      </Link>
    </form>
  );
};

export default ItineraryForm;

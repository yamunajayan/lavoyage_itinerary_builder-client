import "./ItineraryForm.scss";
import { useRef, useState } from "react";

const ItineraryForm = ({ getItineraryQuery }) => {
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
  const [formData, setFormData] = useState({
    numberOfDays: "",
    travelBy: "",
    month: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.numberOfDays) {
      newErrors.numberOfDays = true;
    }
    if (!formData.travelBy) {
      newErrors.travelBy = true;
    }

    if (!formData.month) {
      newErrors.month = true;
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const itineraryObject = {
        number_of_days: Number(formRef.current.numberOfDays.value),
        travel_by: formRef.current.travelBy.value,
        month: formRef.current.month.value,
      };
      getItineraryQuery(itineraryObject);
    }
  };

  return (
    <form className="itinerary-form" ref={formRef} onSubmit={handleFormSubmit}>
      <input
        placeholder="Number of days"
        className={`itinerary-form__input ${
          errors.numberOfDays ? "itinerary-form__input--error" : ""
        }`}
        name="numberOfDays"
        value={formData.numberOfDays}
        onChange={handleChange}
      />
      <select
        className={`itinerary-form__input ${
          errors.travelBy ? "itinerary-form__input--error" : ""
        }`}
        name="travelBy"
        value={formData.travelBy}
        onChange={handleChange}
      >
        <option value="" disabled>
          Travel By
        </option>
        <option value="public transport">Public Transport</option>
        <option value="car">Car</option>
      </select>
      <select
        className={`itinerary-form__input ${
          errors.month ? "itinerary-form__input--error" : ""
        }`}
        name="month"
        value={formData.month}
        onChange={handleChange}
      >
        <option value="" disabled>
          Month
        </option>
        {months.map((month) => (
          <option key={month.toLowerCase()} value={month.toLowerCase()}>
            {month}
          </option>
        ))}
      </select>
      <button type="submit" className="itinerary-form__button">
        Build Itinerary
      </button>
    </form>
  );
};

export default ItineraryForm;

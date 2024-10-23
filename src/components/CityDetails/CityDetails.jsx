import "./CityDetails.scss";
import CountryCard from "../countryCard/countryCard";
import romeImage from "../../assets/photos/rome-2.jpeg";
import veniceImage from "../../assets/photos/italy-1.avif";
import pisaImage from "../../assets/photos/pisa.avif";
import milanImage from "../../assets/photos/milan-1.avif";
import sicilyImage from "../../assets/photos/sicily.avif";
import cinqueTerreImage from "../../assets/photos/cinque-terre.jpeg";
import florenceImage from "../../assets/photos/florence-1.jpeg";
import tuscanyImage from "../../assets/photos/Tuscany.jpeg";
import baliImage from "../../assets/photos/Bali-1.webp";
import chevronRight from "../../assets/logos/chevron-right.svg";
import chevronLeft from "../../assets/logos/chevron-left.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ItineraryForm from "../ItineraryForm/ItineraryForm";

const CityDetails = ({ cities }) => {
  const [selectedCities, setSelectedCities] = useState([]);

  //   const cities = [
  //     {
  //       cityName: "ROME",
  //       cityImage: romeImage,
  //       cityDescription:
  //         "Rome, the Eternal City, captivates with its rich history, iconic landmarks like the Colosseum and Vatican, and vibrant Italian culture.",
  //       recommendedStayDuration: 2,
  //     },
  //     {
  //       cityName: "VENICE",
  //       cityImage: veniceImage,
  //       cityDescription:
  //         "Venice, the floating city, is renowned for its canals, bridges, and stunning architecture, offering a romantic escape like no other.",
  //       recommendedStayDuration: 2,
  //     },
  //     {
  //       cityName: "TUSCANY",
  //       cityImage: tuscanyImage,
  //       cityDescription:
  //         "Tuscany is famed for its rolling hills, vineyards, and charming villages, making it the perfect destination for food, wine, and relaxation.",
  //       recommendedStayDuration: 3,
  //     },
  //     {
  //       cityName: "FLORENCE",
  //       cityImage: florenceImage,
  //       cityDescription:
  //         "Florence, the cradle of the Renaissance, is home to world-class art, historic cathedrals, and breathtaking architecture.",
  //       recommendedStayDuration: 2,
  //     },
  //     {
  //       cityName: "PISA",
  //       cityImage: pisaImage,
  //       cityDescription:
  //         "Pisa is known worldwide for its iconic Leaning Tower, but it also offers rich history and picturesque streets to explore.",
  //       recommendedStayDuration: 1,
  //     },
  //     {
  //       cityName: "MILAN",
  //       cityImage: milanImage,
  //       cityDescription:
  //         "Milan, Italy's fashion capital, blends modern sophistication with historic landmarks like the Duomo and Da Vinci’s Last Supper.",
  //       recommendedStayDuration: 2,
  //     },
  //     {
  //       cityName: "SICILY",
  //       cityImage: sicilyImage,
  //       cityDescription:
  //         "Sicily, the largest island in the Mediterranean, boasts ancient ruins, stunning beaches, and a rich culinary tradition.",
  //       recommendedStayDuration: 3,
  //     },
  //     {
  //       cityName: "CINQUE TERRE",
  //       cityImage: cinqueTerreImage,
  //       cityDescription:
  //         "Cinque Terre, a rugged coastal region, is known for its colorful villages, dramatic cliffs, and crystal-clear waters, perfect for hiking and relaxing.",
  //       recommendedStayDuration: 2,
  //     },
  //   ];

  const handleCitySelection = (event, cityName) => {
    if (event.target.checked) {
      setSelectedCities((prevCities) => [...prevCities, cityName]);
      console.log(selectedCities);
    } else {
      setSelectedCities((prevCities) =>
        prevCities.filter((city) => city !== cityName)
      );
    }
  };

  return (
    <section className="city-details">
      <article className="city-details__itinerary">
        <h2 className="city-details__title">
          Let's create the perfect itinerary just for you.
        </h2>
        <ItineraryForm />
      </article>
      <h2 className="city-details__title">
        Select the cities you want to visit
      </h2>
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
                        onChange={(e) => handleCitySelection(e, city.cityName)}
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
    </section>
  );
};

export default CityDetails;

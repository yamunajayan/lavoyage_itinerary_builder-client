import "./Hero.scss";
import searchLogo from "../../assets/logos/search.svg";
import errorLogo from "../../assets/logos/error-24px.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

import beach1 from "../../assets/photos/beach-1.webp";
import beach2 from "../../assets/photos/beach-2.jpeg";
import beach3 from "../../assets/photos/beach-3.jpg";
import beach4 from "../../assets/photos/beach-4.webp";
import beach5 from "../../assets/photos/beach-5.webp";

const Hero = ({ countriesArray }) => {
  //to display mupliple images in hero section
  const images = [
    `url(${beach1})`,
    `url(${beach2})`,
    `url(${beach3})`,
    `url(${beach4})`,
    `url(${beach5})`,
  ];
  //to display mupliple headlines in hero section
  const messages = [
    "Where do you want to go?",
    "Select your travel destinations...",
    "Discover new adventures...",
    "Plan your next journey...",
    "Create your perfect itinerary...",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const formRef = useRef();
  const navigate = useNavigate();
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
        return nextIndex;
      });
    };

    const interval = setInterval(changeBackground, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = formRef.current.search.value;
    if (!searchValue) {
      setSearchError(true);
    } else {
      const found = countriesArray.some(
        (country) => country.country_name.toLowerCase() === searchValue
      );
      if (found) {
        setSearchError(false);
        navigate(`/countries/${searchValue}`);
      } else {
        setSearchError(true);
      }
    }
  };

  const handleInputChange = (event) => {
    if (!event.target.value) {
      setSearchError(false);
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: currentImage,
        height: "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header countriesArray={countriesArray} />
      <h1 className="hero__title">{messages[currentMessageIndex]}</h1>
      <form
        id="inputWrapper"
        className={`hero__search ${searchError ? "hero__search--error" : ""}`}
        onSubmit={handleSearch}
        ref={formRef}
      >
        <img
          src={searchLogo}
          alt="search logo"
          className="hero__search-image"
        />
        <input
          name="search"
          placeholder="Search any country"
          className="hero__input"
          onChange={handleInputChange}
        ></input>
      </form>
      {searchError && (
        <div className="hero__error-box">
          <img src={errorLogo} alt="error logo" />
          <p>
            Sorry the country entered is not in our database, please choose from
            list below
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;

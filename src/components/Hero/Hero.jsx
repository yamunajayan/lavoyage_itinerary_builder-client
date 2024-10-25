import "./Hero.scss";
import searchLogo from "../../assets/logos/search.svg";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

const Hero = ({ countriesArray }) => {
  const images = [
    "url(src/assets/photos/beach-1.webp)",
    "url(src/assets/photos/beach-2.jpeg)",
    "url(src/assets/photos/beach-3.jpg)",
    "url(src/assets/photos/beach-4.webp)",
    "url(src/assets/photos/beach-5.webp)",
  ];

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
      <form id="inputWrapper" className="hero__search">
        <img
          src={searchLogo}
          alt="search logo"
          className="hero__search-image"
        />
        <input
          name="search"
          placeholder="Search"
          className="hero__input"
        ></input>
      </form>
    </section>
  );
};

export default Hero;

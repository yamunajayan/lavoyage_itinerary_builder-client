import "./HeroLandingPage.scss";
import searchLogo from "../../assets/logos/search.svg";
import { useState, useEffect } from "react";

const HeroLandingPage = () => {
  const images = [
    "url(src/assets/photos/beach-1.webp)",
    "url(src/assets/photos/beach-2.jpeg)",
    "url(src/assets/photos/beach-3.jpg)",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  console.log(currentImage);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, [images]);

  return (
    <section
      className="hero-landing-page"
      style={{
        backgroundImage: currentImage,
        height: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="hero-landing-page__title">Where do you want to go?</h1>
      <form id="inputWrapper" className="hero-landing-page__search">
        <img
          src={searchLogo}
          alt="search logo"
          className="hero-landing-page__search-image"
        />
        <input
          name="search"
          placeholder="Search"
          className="hero-landing-page__input"
        ></input>
      </form>
    </section>
  );
};

export default HeroLandingPage;

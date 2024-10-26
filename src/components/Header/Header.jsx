import "./Header.scss";
import headerLogos from "../../assets/logos/laVoyage.svg";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Header = ({ countriesArray }) => {
  const [scrolled, setScrolled] = useState(false);
  const [destinationsList, setDestinationsList] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { countryName } = useParams();

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (countriesArray && countriesArray.length > 0) {
      const destinations = countriesArray.map((country) => {
        return country.country_name;
      });
      setDestinationsList(destinations);
    }
  }, [countriesArray]);

  return (
    <header className={scrolled ? "header header--scrolled" : "header"}>
      <div className="header__box">
        <Link to="/">
          <div className="header__logo-box">
            <img
              src={headerLogos}
              alt="header logo"
              className="header__logo-image"
            />
          </div>
        </Link>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/">Home</Link>
            </li>
            {!countryName && (
              <li className="header__item">
                <div onClick={handleDropdownToggle}>Destinations</div>
                {/* Dropdown menu */}
                {isDropdownVisible && (
                  <ul className="header__dropdown-menu">
                    {destinationsList.map((destination, index) => (
                      <Link key={index} to={`/countries/${destination}`}>
                        <li className="header__dropdown-item">{destination}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            )}

            <li className="header__item">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

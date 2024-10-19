import "./Header.scss";
import headerLogo from "../../assets/logos/la-voyage.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__box">
        <div className="header__logo-box">
          <img
            src={headerLogo}
            alt="header logo"
            className="header__logo-image"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/">Home</Link>
            </li>
            <li className="header__item">Destinations</li>
            <li className="header__item">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

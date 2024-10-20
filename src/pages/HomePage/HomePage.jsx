import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CountryCard from "../../components/countryCard/countryCard";
import CountrySection from "../../components/CountrySection/CountrySection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CountrySection />
    </>
  );
};

export default HomePage;

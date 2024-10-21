import "./CountryDetailsPage.scss";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CountryHero from "../../components/CountryHero/CountryHero";
import CountryDetails from "../../components/CountryDetails/CountryDetails";

const CountryDetailsPage = () => {
  const { countryName } = useParams();
  return (
    <>
      <CountryHero countryName={countryName} />
      <CountryDetails />
    </>
  );
};

export default CountryDetailsPage;

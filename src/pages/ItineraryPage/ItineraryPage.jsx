import CountryHero from "../../components/CountryHero/CountryHero";
import { useParams } from "react-router-dom";
import ItineraryDetails from "../../components/ItineraryDetails/ItineraryDetails";

//This page is for future implementation
const ItineraryPage = () => {
  const { countryName } = useParams();
  return (
    <>
      <CountryHero countryName={countryName} />
      <ItineraryDetails countryName={countryName} />
    </>
  );
};

export default ItineraryPage;

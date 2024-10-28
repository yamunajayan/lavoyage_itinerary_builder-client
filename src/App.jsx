import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage/CountryDetailsPage";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/countries/:countryName"
            element={<CountryDetailsPage />}
          />
          {/* For future implementation to show all itineraries */}
          <Route
            path="/countries/:countryName/itinerary"
            element={<ItineraryPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

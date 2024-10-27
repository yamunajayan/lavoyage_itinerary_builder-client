import React from "react";
import "./MapComponent.scss";

const MapComponent = ({ selectedMarkers, countryCoordinates }) => {
  // const geoapifyApiKey = "4138f9d5e5b6483e9d95406e0cb805f6";
  const geoapifyApiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
  console.log(geoapifyApiKey);
  const mapStyle = "osm-bright";

  console.log(countryCoordinates);
  console.log(selectedMarkers);
  const zoom = 4.5;

  const lat = countryCoordinates.lat;
  const lon = countryCoordinates.lon;

  const markerDetail =
    "type:material;color:red;size:x-large;icon:cloud;icontype:awesome";

  const markerString = selectedMarkers.map((marker) => {
    return `lonlat:${marker.lon},${marker.lat};${markerDetail};text:${marker.name};textsize:small;whitecircle:no`;
  });

  const joinedMarkerString = markerString.join("|");

  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=${mapStyle}&width=600&height=600&center=lonlat:${lon},${lat}&zoom=${zoom}&marker=${joinedMarkerString}&apiKey=${geoapifyApiKey}&lang=en`;

  return (
    <div className="map-component">
      {mapUrl ? (
        <iframe
          src={mapUrl}
          className="map-component__image"
          title="Map of Italy"
        />
      ) : (
        <p>Loading map...</p> // Show loading message until mapUrl is ready
      )}
    </div>
  );
};

export default MapComponent;

import React from "react";
import "./MapComponent.scss";

const MapComponent = ({ selectedMarkers, countryCoordinates }) => {
  const geoapifyApiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
  const mapStyle = "osm-bright";

  const zoom = 4.5;

  const lat = countryCoordinates.lat;
  const lon = countryCoordinates.lon;

  const markerDetail =
    "type:material;color:red;size:x-large;icon:cloud;icontype:awesome";

  if (selectedMarkers.length === 0) {
    console.log("no cities selected");
  }
  const markerString = selectedMarkers.map((marker) => {
    return `lonlat:${marker.lon},${marker.lat};${markerDetail};text:${marker.name};textsize:small;whitecircle:no`;
  });

  // const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=${mapStyle}&width=600&height=600&center=lonlat:${lon},${lat}&zoom=${zoom}&marker=${joinedMarkerString}&apiKey=${geoapifyApiKey}&lang=en`;
  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=${mapStyle}&width=600&height=600&center=lonlat:${lon},${lat}&zoom=${zoom}${
    selectedMarkers.length > 0 ? "&marker=" + markerString.join("|") : ""
  }&apiKey=${geoapifyApiKey}&lang=en`;

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

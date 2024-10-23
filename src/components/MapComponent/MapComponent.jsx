import React from "react";
import "./MapComponent.scss";

const MapComponent = () => {
  const geoapifyApiKey = "4138f9d5e5b6483e9d95406e0cb805f6";
  const mapStyle = "osm-bright";
  const lat = 41.8719;
  const lon = 12.5674;
  const zoom = 5;

  const markers = [
    { lat: 41.9028, lon: 12.4964, name: "Rome" }, // Rome
    { lat: 43.7696, lon: 11.2558, name: "Florence" }, // Florence
    { lat: 45.4408, lon: 12.3155, name: "Venice" }, // Venice
  ];

  const markerDetail =
    "type:material;color:red;size:x-large;icon:cloud;icontype:awesome";

  const markerString = markers.map((marker) => {
    return `lonlat:${marker.lon},${marker.lat};${markerDetail};text:${marker.name};textsize:small;whitecircle:no`;
  });
  console.log(markerString);
  const joinedMarkerString = markerString.join("|");
  console.log(joinedMarkerString);

  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=${mapStyle}&width=600&height=600&center=lonlat:${lon},${lat}&zoom=${zoom}&marker=${joinedMarkerString}&apiKey=${geoapifyApiKey}&lang=en`;

  return (
    <div className="map-component">
      <iframe
        src={mapUrl}
        className="map-component__image"
        title="Map of Italy"
      />
    </div>
  );
};

export default MapComponent;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const ResizeMap = () => {
  const map = useMap();
  map._onResize();
  return null;
};

export default function Contact() {
  return (
    <>
      <div id="mapid">
        <MapContainer
          center={[52.249, 20.98]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "450px", width: "100%" }}
        >
          <ResizeMap />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.249, 20.98]}>
            <Popup>Nasza siedziba</Popup>
          </Marker>
        </MapContainer>
        <div className="p-d-flex p-flex-column p-ai-center p-jc-center p-mt-5">
          <span>Ulica Spacerowa 3, Warszawa, 03-783</span>
          <span>Numer telefonu: 833-854-111</span>
        </div>
      </div>
    </>
  );
}

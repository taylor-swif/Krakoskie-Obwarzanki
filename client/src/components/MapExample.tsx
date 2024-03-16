import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./AddNewMarker";
// import LocationMarker from "./AddNewMarker";

export default function MapExample() {
  const Cracow = { lat: 50.061389, lng: 19.938333 };
  const positions = [
    { lat: 50.061389, lng: 19.938333, popupText: "Pyszne obwarzaki" },
    { lat: 50.065723, lng: 19.919415, popupText: "Pyszne obwarzaki" },
    { lat: 50.064718, lng: 19.945654, popupText: "Pyszne obwarzaki" },
  ];

  return (
    <MapContainer center={Cracow} zoom={14} style={{ position: "relative" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {positions.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>{position.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

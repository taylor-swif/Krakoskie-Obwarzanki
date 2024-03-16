import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import LocationMarker from "./AddNewMarker";
import icon from "/src/assets/icon_ob.png";
// import LocationMarker from "./AddNewMarker";

const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [36, 36],
});

export default function MapExample() {
  const Cracow = { lat: 50.061389, lng: 19.938333 };
  const positions = [
    { lat: 50.061389, lng: 19.938333, popupText: "Pyszne obwarzaki" },
    { lat: 50.065723, lng: 19.919415, popupText: "Pyszne obwarzaki" },
    { lat: 50.064718, lng: 19.945654, popupText: "Pyszne obwarzaki" },
  ];

  return (
    <MapContainer
      center={Cracow}
      zoom={14}
      zoomControl={false}
      style={{ position: "relative" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {positions.map((position, index) => (
        <Marker key={index} position={position} icon={customIcon}>
          <Popup>{position.popupText}</Popup>
        </Marker>
      ))}
      <ZoomControl position="topright" />
    </MapContainer>
  );
}

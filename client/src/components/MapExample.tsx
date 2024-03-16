import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Position {
  lat: number;
  lng: number;
}

export default function MapExample() {
  const position: Position = { lat: 50.061389, lng: 19.938333 };

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

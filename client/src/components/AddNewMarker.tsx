import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import AddShop from "./AddShop";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [setupOpen, setSetupOpen] = useState(false);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      setSetupOpen(true);
    },
  });

  return (
    <>
      {position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <AddShop isOpen={setupOpen} onClose={() => setSetupOpen(false)} />
    </>
  );
}

export default LocationMarker;

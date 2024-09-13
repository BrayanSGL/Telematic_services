import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import cities from "../../../public/cities.json";

const Map = ({route}) => {
  const center = [4.711, -74.0721]; // Latitud y longitud de Bogotá


  const getCoordinates = (cityName) => {
    const city = cities.find((city) => city.name === cityName);
    return city.coordinates;
  };

  const getRouteCoordinates = (route) => {
    const start = getCoordinates(route.start);
    const end = getCoordinates(route.end);
    return [start, end];
  };

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ height: "400px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {route.map((route, index) => (
        <Polyline
          key={index}
          positions={getRouteCoordinates(route)}
          color="blue"
        >
          <Popup>
            <h3>{route.routeName}</h3>
          </Popup>
        </Polyline>
      ))}
    </MapContainer>
  );
};

export default Map;

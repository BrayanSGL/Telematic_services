import { MapContainer, TileLayer, Circle } from "react-leaflet";

export const NavigatioMap = () => {
  const doradoAirport = [4.7, -74.15];
  const calera = [4.72, -73.96];
  const soacha = [4.58, -74.22];
  const centro = [4.711, -74.0721];

  return (
    <MapContainer
      center={centro}
      zoom={10}
      style={{ height: "400px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle center={doradoAirport} radius={400} color={"red"} />

      <Circle center={calera} radius={400} color={"blue"} />

      <Circle center={soacha} radius={400} color={"green"} />
    </MapContainer>
  );
};

import { useEffect, useState } from "react";
import "./AddRouteForm.css";

export const AddRouteForm = () => {
  const [routeName, setRouteName] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Leer el archivo JSON con las ciudades
    fetch("/cities.json")
      .then((response) => response.json())
      .then((data) => setCities(data.cities))
      .catch((error) => console.error("Error al cargar las ciudades:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que el formulario recargue la página

    if (routeName && startLocation && endLocation) {
      const newRoute = {
        routeName: routeName,
        start: startLocation,
        end: endLocation,
      };

      setRoutes([...routes, newRoute]);

      // Reiniciar los campos del formulario
      setRouteName("");
      setStartLocation("");
      setEndLocation("");
    }
  };

  return (
    <div className="add-route-form-container">
      <h2 className="add-route-form-title">Agregar Nueva Ruta</h2>
      <form onSubmit={handleSubmit} className="add-route-form">
        <div className="form-group">
          <label htmlFor="routeName" className="form-label">
            Nombre de la Ruta:
          </label>
          <input
            type="text"
            id="routeName"
            className="form-input"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startLocation" className="form-label">
            Ruta de Inicio:
          </label>
          <select
            id="startLocation"
            className="form-select"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            required
          >
            <option value="">Seleccionar inicio</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name} ({city.code})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="endLocation" className="form-label">
            Ruta de Fin:
          </label>
          <select
            id="endLocation"
            className="form-select"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            required
          >
            <option value="">Seleccionar fin</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name} ({city.code})
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="form-button">
          Guardar Ruta
        </button>
      </form>

      <h3 className="saved-routes-title">Rutas Guardadas:</h3>
      <ul className="saved-routes-list">
        {routes.map((route, index) => (
          <li key={index} className="saved-route-item">
            {route.routeName}: {route.start} - {route.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

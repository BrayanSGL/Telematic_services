import { useEffect, useState } from "react";
import "./AddRouteForm.css";

export const AddRouteForm = () => {
  const [routeName, setRouteName] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [routes, setRoutes] = useState([]);

  const dbCities = [
    {
      name: "Bogotá",
      code: "BOG",
      coordinates: [4.7, -74.15],
      airport: "Aeropuerto Internacional El Dorado",
    },
    {
      name: "Medellín",
      code: "MDE",
      coordinates: [6.22, -75.59],
      airport: "Aeropuerto Internacional José María Córdova",
    },
    {
      name: "Cali",
      code: "CLO",
      coordinates: [3.45, -76.53],
      airport: "Aeropuerto Internacional Alfonso Bonilla Aragón",
    },
    {
      name: "Cartagena",
      code: "CTG",
      coordinates: [10.44, -75.51],
      airport: "Aeropuerto Internacional Rafael Núñez",
    },
    {
      name: "Pereira",
      code: "PEI",
      coordinates: [4.81, -75.74],
      airport: "Aeropuerto Internacional Matecaña",
    },
    {
      name: "Pasto",
      code: "PSO",
      coordinates: [1.4, -77.29],
      airport: "Aeropuerto Antonio Nariño",
    },
    {
      name: "Bucaramanga",
      code: "BGA",
      coordinates: [7.13, -73.18],
      airport: "Aeropuerto Internacional Palonegro",
    },
    {
      name: "Barranquilla",
      code: "BAQ",
      coordinates: [10.89, -74.78],
      airport: "Aeropuerto Internacional Ernesto Cortissoz",
    },
    {
      name: "Manizales",
      code: "MZL",
      coordinates: [5.03, -75.46],
      airport: "Aeropuerto La Nubia",
    },
    {
      name: "Santa Marta",
      code: "SMR",
      coordinates: [11.12, -74.23],
      airport: "Aeropuerto Internacional Simón Bolívar",
    },
    {
      name: "Villavicencio",
      code: "VVC",
      coordinates: [4.17, -73.61],
      airport: "Aeropuerto Vanguardia",
    },
    {
      name: "Leticia",
      code: "LET",
      coordinates: [-4.19, -69.94],
      airport: "Aeropuerto Alfredo Vásquez Cobo",
    },
  ];

  useEffect(() => {
    // Inicializa IndexedDB y carga las ciudades
    const initializeCities = () => {
      const dbRequest = indexedDB.open("MyDatabase", 2); // Incrementa la versión si es necesario

      dbRequest.onupgradeneeded = function (event) {
        const db = event.target.result;

        if (!db.objectStoreNames.contains("cityStore")) {
          const cityStore = db.createObjectStore("cityStore", {
            keyPath: "code",
          });
          cityStore.createIndex("name", "name", { unique: false });
        }
      };

      dbRequest.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["cityStore"], "readwrite");
        const cityStore = transaction.objectStore("cityStore");

        cityStore.count().onsuccess = function (e) {
          if (e.target.result === 0) {
            // Si el store está vacío, insertar las ciudades
            dbCities.forEach((city) => cityStore.add(city));
          } else {
            // Cargar las ciudades desde IndexedDB
            const allCities = [];
            cityStore.openCursor().onsuccess = function (event) {
              const cursor = event.target.result;
              if (cursor) {
                allCities.push(cursor.value);
                cursor.continue();
              } else {
                setCities(allCities); // Set cities once all have been retrieved
              }
            };
          }
        };
      };

      dbRequest.onerror = function (event) {
        console.error("Error al abrir la base de datos:", event.target.error);
      };
    };

    initializeCities();
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

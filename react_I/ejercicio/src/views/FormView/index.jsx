import "./style.css";
import { useState } from "react";

export const FormView = () => {
  const [nombre, setNombre] = useState("");
  const [peso, setPeso] = useState("");
  const [edad, setEdad] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Peso:", peso);
    console.log("Edad:", edad);
    setUsers([...users, { nombre, peso, edad }]);
    setNombre("");
    setPeso("");
    setEdad("");
  };

  return (
    <div className="body-form">
      <div class="form-container">
        <h2>Formulario de Información</h2>
        <form onSubmit={handleSubmit}>
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label for="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            name="peso"
            required
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />

          <label for="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            required
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />

          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div className="user-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Peso</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.nombre}</td>
                <td>{user.peso} kg</td>
                <td>{user.edad} años</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

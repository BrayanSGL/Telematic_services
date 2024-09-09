import { useEffect, useState } from 'react';
import './AdminView.css';

export const AdminView = () => {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Estado para manejar los usuarios registrados
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Leer el archivo JSON dentro de la carpeta public
    fetch('/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al cargar usuarios:', error));
  }, []);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación o registro
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="admin-view-container">
      <h1>Admin View</h1>
      
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="submit-button">Iniciar Sesión</button>
      </form>

      <button className="register-button">Registrar nuevo usuario</button>

      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>

    </div>
  );
};


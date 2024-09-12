CREATE TABLE Cities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  code TEXT NOT NULL,
  coordinates TEXT NOT NULL,
  airport TEXT
);

CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  UNIQUE(username)
);

CREATE TABLE Routes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  origin_city_id INTEGER NOT NULL,
  destination_city_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (origin_city_id) REFERENCES Cities(id),
  FOREIGN KEY (destination_city_id) REFERENCES Cities(id)
);

INSERT INTO Cities (name, code, coordinates, airport) VALUES
('Bogotá', 'BOG', '4.70,-74.15', 'Aeropuerto Internacional El Dorado'),
('Medellín', 'MDE', '6.22,-75.59', 'Aeropuerto Internacional José María Córdova'),
('Cali', 'CLO', '3.45,-76.53', 'Aeropuerto Internacional Alfonso Bonilla Aragón'),
('Cartagena', 'CTG', '10.44,-75.51', 'Aeropuerto Internacional Rafael Núñez'),
('Pereira', 'PEI', '4.81,-75.74', 'Aeropuerto Internacional Matecaña'),
('Pasto', 'PSO', '1.40,-77.29', 'Aeropuerto Antonio Nariño'),
('Bucaramanga', 'BGA', '7.13,-73.18', 'Aeropuerto Internacional Palonegro'),
('Barranquilla', 'BAQ', '10.89,-74.78', 'Aeropuerto Internacional Ernesto Cortissoz'),
('Manizales', 'MZL', '5.03,-75.46', 'Aeropuerto La Nubia'),
('Santa Marta', 'SMR', '11.12,-74.23', 'Aeropuerto Internacional Simón Bolívar'),
('Villavicencio', 'VVC', '4.17,-73.61', 'Aeropuerto Vanguardia'),
('Leticia', 'LET', '-4.19,-69.94', 'Aeropuerto Alfredo Vásquez Cobo');

INSERT INTO Users (username, password) VALUES
('admin', 'admin');

##mostrar tablas
SELECT * FROM Cities;
SELECT * FROM Users;

INSERT INTO Routes (user_id, origin_city_id, destination_city_id) VALUES
(1, 1, 3); -- Bogotá - Cali

SELECT * FROM Routes;
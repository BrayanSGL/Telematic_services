# Ejercicio Express

Este es un ejemplo de código en Node.js utilizando el framework Express. El código crea un servidor web que escucha en el puerto 3000 y realiza las siguientes acciones:

1. Importa el módulo `express` y crea una instancia de la aplicación.
2. Importa el módulo `path` para poder utilizar la función `path.join`.
3. Importa el módulo `body-parser` para poder utilizar el middleware `bodyParser.urlencoded`.
4. Configura la aplicación para utilizar el middleware `bodyParser.urlencoded` con la opción `extended` establecida en `false`.
5. Define una ruta GET para la ruta raíz ("/") que envía el archivo `index.html` utilizando la función `res.sendFile` y la función `path.join` para obtener la ruta absoluta del archivo.
6. Define una ruta POST para la ruta raíz ("/") que recibe un parámetro `age` del cuerpo de la solicitud (`req.body.age`) y envía una respuesta con el mensaje "Edad recibida: " seguido del valor de `age`.
7. Inicia el servidor y muestra un mensaje en la consola indicando la URL en la que se encuentra el servidor.

Para ejecutar este código, asegúrate de tener Node.js instalado y ejecuta el siguiente comando en la terminal:

```
node main.js
```

Luego, puedes acceder al servidor en tu navegador utilizando la URL `http://localhost:3000`.

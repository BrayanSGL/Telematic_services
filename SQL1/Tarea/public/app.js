
console.log('test');
// document.getElementById('promiseButton').addEventListener('click', () => {
//     var resultado = document.getElementById('promiseResult');
//     var tabla = document.getElementById('tabla');
//     resultado.innerHTML = 'Loading...';
//     // recibir el 'res.send('hola desde el servidor');
//     fetch('/generar-reporte')
//       .then(response => response.json())
//       .then(data => {
//         data.forEach(fila => {

//           /*
//             nombre_equipo
//             ciudad 
//             estadio 
//             capacidad_estadio
//             entrenador 
//           */
//           var nuevaFila = tabla.insertRow(-1);
//           var nuevaCelda = nuevaFila.insertCell(-1);
//           nuevaCelda.innerHTML = fila.nombre_equipo;
//           nuevaCelda = nuevaFila.insertCell(-1);
//           nuevaCelda.innerHTML = fila.ciudad;
//           nuevaCelda = nuevaFila.insertCell(-1);
//           nuevaCelda.innerHTML = fila.estadio;
//           nuevaCelda = nuevaFila.insertCell(-1);
//           nuevaCelda.innerHTML = fila.capacidad_estadio;
//           nuevaCelda = nuevaFila.insertCell(-1);
//           nuevaCelda.innerHTML = fila.entrenador;


//         });

//       });
//   });
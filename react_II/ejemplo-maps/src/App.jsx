import './App.css'
// import BasicMap from '../components/Mapas'
// import ShapesMap from '../components/Marcadores'
import EventMap from '../components/Eventos'
// import SaveMap from '../components/Guardar'
import { NavigatioMap } from '../components/Ejercicio'

function App() {

  return (
    <>
      {/* <h1>Mapa de Bogotá</h1>
      <BasicMap />
      <h1>Mapa de Bogotá con marcadores</h1>
      <ShapesMap /> */}
      <h1>Mapa de Bogotá con eventos</h1>
      <EventMap />
      {/* <h1>Mapa de Bogotá con guardar</h1>
      <SaveMap /> */}
      <h1>Navegación</h1>
      <NavigatioMap />
    </>
  )
}

export default App

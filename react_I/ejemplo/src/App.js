// import logo from './logo.svg';
import './App.css';
import calamardo from './calamardo.jpg';
import Saludo from './saludo';
import Contador from './contador';
import ContadorAlarm from './contadorAlarm';
import Timer from './timer';
import ButtonTimer from './buttonTimer';
import Users from './users';
import Slider from './slider';
//import 'boostrap/dist/css/bootstrap.min.css';
import LoadingBar from './loadingBar';

function App() {
  return (
    <div>
    <Saludo nombre="Mundo" />
    <div className="App">
     <h1>¡Hola Mundo!</h1>
      <img src={calamardo} alt="calamardo" width="200" />
      <Contador />
      <ContadorAlarm />
      <Timer />
      <ButtonTimer />
      <Users />
      <Slider/>
      {/* <LoadingBar/> */}
    </div>
    </div>
  );
}

export default App;

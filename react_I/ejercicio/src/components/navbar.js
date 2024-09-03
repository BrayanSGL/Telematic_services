import React from "react";
import "./navbar.css";
import BurgerButton from "./burgerButton";

function Navbar() {
  return (
    <frameElement>
      <h2>Ejercio con React</h2>
      <div>
        <a href="#">Inicio</a>
        <a href="#">Formulario</a>

        <BurgerButton />
      </div>
    </frameElement>
  );
}
export default Navbar;

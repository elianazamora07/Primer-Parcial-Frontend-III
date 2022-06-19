import { useState } from "react";
import React from "react";

import { Divproducto } from "../assets/styles/Divproducto";
import { Productoh5 } from "../assets/styles/Productoh5";
import {Productospan} from "../assets/styles/Productospan";
import {Productobutton} from "../assets/styles/Productobutton";
import {Descripcionp} from "../assets/styles/Descripcionp";
import {Nombreh3} from "../assets/styles/Nombreh3";
import {Productoimg} from "../assets/styles/Productoimg";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({imagen,nombre, descripcion, stock, adding }) {
  const [cantidad, setCantidad] = useState(stock);
  const [disable, setDisable] = useState(false);

  const setStock = () => {
    if (cantidad === 1) {
      setCantidad("agotado");
      setDisable(true);
    } else {
      setCantidad((cantidad) => cantidad - 1);
    }
    adding();
  };

  return (
    <Divproducto>
      <Nombreh3>{nombre}</Nombreh3>
      <Productoimg src={imagen} alt="imagen zapatos"/>

      <Descripcionp>{descripcion}</Descripcionp>

      <Productoh5>
        cantidad: <Productospan stock={cantidad > 0}>{cantidad}</Productospan>
      </Productoh5>

      <Productobutton
        disabled={disable}
        onClick={() => {
          setStock();
        }}
      >
        COMPRAR
      </Productobutton>
    </Divproducto>
  );
}

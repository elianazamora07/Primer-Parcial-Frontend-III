import React from "react";
import { Header } from "../assets/styles/Header";
import {Headerh1} from "../assets/styles/Headerh1";
import {Headerp} from "../assets/styles/Headerp";
import {Headerspan} from "../assets/styles/Headerspan";
import {BsCart4} from "react-icons/bs"



// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({stock}) {
  return (
    <Header>
      <Headerh1>Carrito de compras <BsCart4/></Headerh1>
      <Headerp>
        Cantidad de productos <Headerspan>{stock}</Headerspan>
      </Headerp>
    </Header>
  );
}

import React from "react";
import Item from "./Item";

import data from "./data.json";

import {Divcontainer} from "../assets/styles/Divcontainer";


// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const Listado = ({ adding }) => {
  return (
    <Divcontainer>
      {data.map((product) => (
        <Item
          key={product.id}
          adding={adding}
          id={product.id}
          imagen={product.producto.imagen}
          nombre={product.producto.nombre}
          descripcion={product.producto.descripcion}
          stock={product.stock}
        />
      ))}
    </Divcontainer>
  );
};
export default Listado;

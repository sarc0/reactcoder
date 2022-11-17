import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
    const onAdd = (cantidad)=>{
        console.log(`Agregaste ${cantidad} items al carrito`)
    }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{detalle.title}</h2>
      <img src={detalle.thumbnail} alt={detalle.title} />
      <p>{detalle.description}</p>
      <p>${detalle.price}</p>
      <ItemCount initial={1} stock={detalle.stock} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetail;

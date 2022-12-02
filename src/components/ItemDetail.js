import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const { addToCart } = useContext(CartContext);
  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} items al carrito`);
    addToCart(detalle);
  };
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
      <p>{detalle.stock} unidades en stock</p>
      <ItemCount initial={1} stock={detalle.stock} onAdd={onAdd} />
      <Link to="/cart" className="nav-link" href="#">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default ItemDetail;

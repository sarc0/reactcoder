import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
        <button disabled={count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;

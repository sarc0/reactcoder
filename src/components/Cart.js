import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartList } = useContext(CartContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {cartList.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cartList.map((item) => (
            <div style={{maxWidth:"300px"}}>
              <h3>{item.title}</h3> 
              <img src={item.thumbnail} alt={item.title} style={{maxWidth:"300px",maxHeight:"300px"}}/>
              <p>{item.price}$</p>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Cart;

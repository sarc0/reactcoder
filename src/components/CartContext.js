import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const[cartList,setCartList] = useState([])
    const addToCart = (item)=>{
        setCartList([...cartList,item])
    }
    const clear = ()=>{
      setCartList([])
    }
  return (
    <CartContext.Provider
      value={{cartList, addToCart,clear}}
    >
        {props.children }
    </CartContext.Provider>
  );
};

export default CartContextProvider

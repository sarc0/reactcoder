import Producto from "../components/Producto";
import { useState, useEffect } from "react";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFetch";

const Productos = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    customFetch(2000, data)
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {datos.map((item) => (
        <Producto
          key={item.id}
          title={item.title}
          price={item.price}
          stock={item.stock}
          thumbnail={item.thumbnail}
        />
      ))}
    </>
  );
};
export default Productos;

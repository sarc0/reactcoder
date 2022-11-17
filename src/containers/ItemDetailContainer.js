import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { customFetch } from "../utils/customFetch";
import { data } from "../utils/data";
const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const {id} = useParams();
  useEffect(() => {
    customFetch(2000,data)
      .then((response) =>
        setDetalle(response.find((item) => item.id === Number(id)))
      )
      .catch((error)=>console.log(error ))
  }, [id])
  return (
    <>
      <ItemDetail detalle={detalle} />
    </>
  );
};
export default ItemDetailContainer;

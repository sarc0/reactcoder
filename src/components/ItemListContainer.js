import Productos from "../containers/ItemList";
import { useState, useEffect } from "react";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";
const ItemListContainer = (props) => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  useEffect(() => {
    if (idCategory == undefined) {
      customFetch(2000, data)
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    } else {
      customFetch(
        2000,
        data.filter((item) => item.CategoryId == idCategory)
      )
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);
  return (
    <>
      <Productos datos={datos} />
    </>
  );
};
export default ItemListContainer;

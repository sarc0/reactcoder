import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { data } from "../utils/data";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();
  useEffect(() => {
    if (idCategory === undefined) {
      customFetch(2000, data)
        .then((response) => setDatos(response))
        .catch((err) => console.log(err));
    } else {
      customFetch(2000, data)
        .then((response) =>
          setDatos(
            response.filter((item) => item.categoryId === Number(idCategory))
          )
        )
        .catch((err) => console.log(err));
    }
  }, [idCategory]);
  return (
    <>
      <ItemList datos={datos} />
    </>
  );
};
export default ItemListContainer;

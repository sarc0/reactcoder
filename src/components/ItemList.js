import List from "../components/Item";

const ItemList = ({ datos }) => {
  return (
    <>
      {datos.map((item) => (
        <List
          id={item.id}
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
export default ItemList;

const Producto = (props) => {
  return (
    <div className="producto-container">
      <div className="producto-info">
        <h3>{props.title}</h3>
        <div className="producto-image">
          <img src={props.thumbnail} alt="Same alt value" />
        </div>
        <p>Price: {props.price}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Producto;

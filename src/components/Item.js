import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="producto-container">
      <div className="producto-info">
        <h3>{props.title}</h3>
        <div className="producto-image">
          <img src={props.thumbnail} alt="Same alt value" />
        </div>
        <p>Price: {props.price}</p>
        <p>{props.description}</p>
        <p>
          <Link
            to={'/item/${id}'}
            style={{ textDecoration: "none", color: "black" }}
          >
            Detalle
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Item;

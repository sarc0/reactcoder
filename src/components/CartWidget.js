const CartWidget = () => {
  return (
    <>
      <button type="button" class="btn btn-primary position-relative">
        <i class="bi bi-cart-fill"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          4<span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </>
  );
};
export default CartWidget;

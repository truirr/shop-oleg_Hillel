import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div>
        <h3>{item.title}</h3>
        <p>{item.price} грн</p>

        <div className="quantity">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>

      <button
        className="delete-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Видалити
      </button>
    </div>
  );
}

export default CartItem;
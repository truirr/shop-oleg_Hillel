import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../features/cart/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section>
      <h1>Кошик</h1>

      {cartItems.length === 0 ? (
        <p className="empty">Кошик порожній</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Загальна сума: {totalPrice} грн</h2>
            <button onClick={() => dispatch(clearCart())}>
              Очистити кошик
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;
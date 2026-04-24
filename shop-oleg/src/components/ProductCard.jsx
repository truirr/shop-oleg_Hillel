import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <p>{product.price} грн</p>
        <button onClick={() => dispatch(addToCart(product))}>
           Додати в кошик
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
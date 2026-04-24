import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">ShopOleg</Link>

        <nav className="nav">
            <Link to="/">Головна</Link>
            <Link to="/cart">Кошик ({totalCount})</Link>
            <Link to="/about">Про проєкт</Link>
        </nav>
    </header>
  );
}

export default Header;
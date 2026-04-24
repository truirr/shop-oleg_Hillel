import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { setSearch } from "../features/products/productsSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { items, search } = useSelector((state) => state.products);

  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <div>
          <h1>Інтернет-магазин техніки</h1>
          <p>
            Курсовий проєкт на React, Redux Toolkit та React Router.
            Тут реалізовано товари, пошук, кошик і управління станом.
          </p>
        </div>
      </section>

      <section className="toolbar">
        <input
          type="text"
          placeholder="Пошук товару..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </section>

      <section className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default HomePage;
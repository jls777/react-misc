import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(true);

  const disable = products.length === 30;

  useEffect(function () {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=3&skip=${0}`
        );
        const data = await res.json();
        if (data && data.products && data.products.length) {
          setProducts(data.products);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw new Error(e);
      }
    }
    fetchProduct();
  }, []);

  function handleCount() {
    setCount((count) => count + 3);
    async function updateProduct() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=3&skip=${count}`
        );
        const data = await res.json();
        if (data && data.products && data.products.length) {
          setProducts((products) => [...products, ...data.products]);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw new Error(e);
      }
    }
    updateProduct();
  }

  console.log(products);
  return (
    <div className="load-more-data-container">
      <div className="data-container">
        <button disabled={disable} className="load-btn" onClick={handleCount}>
          Load more
        </button>
        <ul className="ul-product">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default LoadMoreData;

function ProductItem({ product }) {
  return (
    <li>
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.title}
      />
      <p className="product-p">{product.title}</p>
    </li>
  );
}

export default ProductItem;

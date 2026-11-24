function ProductCard({
  title,
  price,
  category = 'General',
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = `₱${price.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

  return (
    <article className={`product-card${inStock ? '' : ' product-card--out-of-stock'}`}>
      {children && <div className="product-card__label">{children}</div>}

      <h2 className="product-card__title">{title}</h2>
      <p className="product-card__category">{category}</p>
      <p className="product-card__price">{formattedPrice}</p>

      {inStock ? (
        <span className="product-card__stock product-card__stock--in">In Stock</span>
      ) : (
        <span className="product-card__stock product-card__stock--out">Out of Stock</span>
      )}

      <button
        type="button"
        className="product-card__button"
        onClick={onAddToCart}
        disabled={!inStock}
      >
        Add to Cart
      </button>
    </article>
  )
}

export default ProductCard
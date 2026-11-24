import { useState } from 'react'
import ProductCard from './components/ProductCard'
import products from './data/products'
import './App.css'

function App() {
  const [cartMessage, setCartMessage] = useState('')

  function handleAddToCart(title) {
    setCartMessage(`${title} added to cart`)
  }

  return (
    <main className="catalog">
      <h1>Mini Product Catalog</h1>
      {cartMessage && (
        <p className="catalog__message" role="status">
          {cartMessage}
        </p>
      )}

      <section className="catalog__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 2 ? 'Sale' : product.id === 5 ? 'New' : null}
          </ProductCard>
        ))}
      </section>
    </main>
  )
}

export default App

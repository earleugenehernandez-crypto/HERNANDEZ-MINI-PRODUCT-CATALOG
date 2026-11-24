import { useState } from 'react'
import ProductCard from './components/ProductCard'
import products from './data/products'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [lastAdded, setLastAdded] = useState('')

  function handleAddToCart(title) {
    setCartCount((count) => count + 1)
    setLastAdded(title)
  }

  return (
    <main className="catalog">
      <h1>CvSU Mini Store</h1>
      <p className="catalog__message" role="status">
        {cartCount === 0
          ? 'Your cart is empty.'
          : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
      </p>

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
            {product.id === 2 && <span>Sale</span>}
            {product.id === 5 && <span>New</span>}
          </ProductCard>
        ))}
      </section>
    </main>
  )
}

export default App

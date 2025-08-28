import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.jsx'
import Product from './pages/productpage/ProductPage.jsx'

export default function App() {
  return (
    <div>
      {/* Simple navigation */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      {/* Routes */}
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </main>
    </div>
  )
}

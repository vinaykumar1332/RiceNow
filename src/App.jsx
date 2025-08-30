import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.jsx';
import Product from './pages/productpage/ProductPage.jsx';
import NavBar from './components/layout/navbar/Navbar.jsx';
import './index.css';
import './App.css';
import 'primeicons/primeicons.css';
import Footer from './components/layout/Footer/Footer.jsx'
export default function App() {
  return (
    <div>
      <NavBar />
      <main style={{  marginTop: '60px' , minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
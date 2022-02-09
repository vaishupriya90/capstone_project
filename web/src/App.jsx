/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import ProductLayout from './components/ProductLayout';
import Cart from './components/cart/Cart';
import OrderHistory from './components/order/OrderHistory';
import './App.css';

function App() {
  return (
    <div className="content">
      <Container fluid>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<ProductLayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

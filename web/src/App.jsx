/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Paintings from './components/painting/Paintings';
import Cart from './components/Cart';
import OrderHistory from './components/order/OrderHistory';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
      </Routes>
    </div>
  );
}

export default App;

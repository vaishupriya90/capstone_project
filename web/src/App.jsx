/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Paintings from './components/Paintings';
import Cart from './pages/Cart';
import './styles.css';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

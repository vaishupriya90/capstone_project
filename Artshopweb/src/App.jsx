import Header from './components/Header';
import {Routes,Route} from 'react-router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
import Painting from './components/Painting';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/paintings" element={<Painting />}/>
      </Routes>
    </div>
      
      
  );
}

export default App;

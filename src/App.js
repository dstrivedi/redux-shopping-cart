import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from './UI/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

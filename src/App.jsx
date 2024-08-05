import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Allproducts from "./components/Allproducts";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Allproducts addToCart={addToCart} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart items={cartItems} onRemoveItem={removeFromCart} />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

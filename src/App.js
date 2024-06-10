import React from "react";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";

import FetchAPI from "./hooks/fetchAPI.js";

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";

export const ProductArray = createContext();

function App() {
  const { data } = FetchAPI("https://666014e35425580055b211d0.mockapi.io/api/v1/Products");

  return (
    <ProductArray.Provider value={ data }>
      <Routes>
        <Route path="/" element={<Layout /> }>
          <Route index element={<Home /> } />
          <Route path="/shop" element={<Shop /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/product/:index" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </ProductArray.Provider>
  );
}

export default App;

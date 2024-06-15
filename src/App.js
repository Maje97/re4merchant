import React from "react";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";

import useFetchAPI from "./hooks/useFetchAPI.js";
import useCartReducer from "./hooks/useCartUpdater.js";

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

export const ProductArray = createContext();
export const CartUpdater = createContext();

function App() {
  const { data } = useFetchAPI("https://666014e35425580055b211d0.mockapi.io/api/v1/Products");
  const { amount, cart, dispatch, HandleAdd, HandleDecrease, HandleDelete } = useCartReducer();

  return (
    <CartUpdater.Provider value={{amount, cart, dispatch, HandleAdd, HandleDecrease, HandleDelete}}>
      <ProductArray.Provider value={ data }>
        <Routes>
          <Route path="/" element={<Layout /> }>
            <Route index element={<Home /> } />
            <Route path="/shop" element={<Shop /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/product/:index" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </ProductArray.Provider>
    </CartUpdater.Provider>
  );
}

export default App;

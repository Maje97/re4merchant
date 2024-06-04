import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout /> }>
            <Route index element={<Home /> } />
            <Route path="/shop" element={<Shop /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/contact" element={<Contact /> } />
          </Route>
        </Routes>
    </>
  );
}

export default App;

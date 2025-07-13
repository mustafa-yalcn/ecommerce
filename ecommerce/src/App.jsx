import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import AllProducts from "./Pages/AllProducts/AllProducts";
import StorePage from "./Pages/Store/Store";
import AboutPage from "./Pages/About/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="store" element={<StorePage />} />
           <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;


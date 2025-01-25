// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LikedProductsPage from "./pages/LikedProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/liked" element={<LikedProductsPage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
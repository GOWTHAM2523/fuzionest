import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        // Get locally created products from localStorage
        const localProducts = JSON.parse(localStorage.getItem("localProducts")) || [];

        // Combine API and local products
        setProducts([...localProducts, ...data.products]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-2xl mb-4">Product Listing ({products?.length})</h4>
          <Link to="/product/create">
            <button className="btn btn-success">Create Product</button>
          </Link>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default HomePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function CreateProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // Use 'thumbnail' for the image field
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result); // Convert image to Base64 and save in 'thumbnail'
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing products from localStorage
    const localProducts = JSON.parse(localStorage.getItem("localProducts")) || [];

    // Check if the product name already exists (case-insensitive)
    const isDuplicate = localProducts.some(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      setError("A product with this name already exists!");
      return;
    }

    // Validate all fields
    if (!name || !description || !price || !thumbnail) {
      setError("All fields are required!");
      return;
    }

    // Save the new product to localStorage
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      thumbnail, // Save image under 'thumbnail' key
    };

    // Add the new product to the existing list and update localStorage
    localStorage.setItem("localProducts", JSON.stringify([newProduct, ...localProducts]));

    // Navigate back to Home Page
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Create Product</h1>

      {/* Error Alert */}
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}

      {/* Product Creation Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="form-control"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            id="productDescription"
            className="form-control"
            placeholder="Enter product description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="productPrice"
            className="form-control"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            id="productImage"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {thumbnail && (
            <div className="mt-3">
              <img
                src={thumbnail}
                alt="Preview"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default CreateProductPage;

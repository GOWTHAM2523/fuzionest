# Product Management Application

This project is a React-based application that allows users to manage products. Users can create, view, and interact with products, including uploading images, adding items to the cart, and liking products. The application uses localStorage to persist data across sessions.

## Features

1. **Product Listing**:
   - Displays a list of products fetched from the DummyJSON API.
   - Combines locally created products with API products.

2. **Create Product**:
   - Users can add new products with a name, description, price, and image.
   - Validates to ensure that the product name is unique (case-insensitive).
   - Image files are converted to Base64 format and stored in localStorage.

3. **Cart Management**:
   - Users can add products to the cart.
   - Supports incrementing and decrementing the quantity of items in the cart.
   - Displays the total quantity of items in the cart.

4. **Like Products**:
   - Users can like or unlike products.
   - Liked products are visually highlighted with a red heart icon.

5. **Persistent Data**:
   - All locally created products and cart/like states are saved in localStorage.
   - Data persists even after a page refresh.

6. **Responsive Design**:
   - Fully responsive and styled with Bootstrap for a clean and modern UI.

## Technologies Used

- **React**: Core framework for building the UI.
- **React Router**: For navigation between pages.
- **Bootstrap**: For responsive design and styling.
- **FontAwesome**: For icons (cart, heart, etc.).
- **localStorage**: For persisting user data across sessions.

## Project Structure

```
src/
|-- components/
|   |-- Navbar.jsx       # Navigation bar with links to Home, Cart, and Liked Products.
|   |-- ProductList.jsx  # Component to display a list of products with cart and like functionality.
|
|-- pages/
|   |-- HomePage.jsx          # Main page displaying the product listing.
|   |-- CreateProductPage.jsx # Page for adding new products.
|   |-- LikedProductsPage.jsx # Page displaying the liked products.
|   |-- CartPage.jsx          # Page displaying the cart and its contents.
|
|-- context/
|   |-- AppContext.jsx    # Context for managing global state (cart, liked products).
|
|-- App.jsx               # Main app component with routing.
|-- index.js              # Entry point for the application.
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GOWTHAM2523/fuzionest.git
   ```

2. Navigate to the project directory:
   ```bash
   cd fuzionest
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Usage

1. Navigate to the Home Page to view the list of products.
2. Click on "Create Product" to add a new product. Fill in all fields, including uploading an image.
3. Manage cart items by incrementing, decrementing, or removing items.
4. Like or unlike products using the heart icon.
5. View liked products on the "Liked Products" page.
6. View and manage the cart on the "Cart" page.
7. New products and cart/like states will persist even after refreshing the page.

## Enhancements

1. **Backend Integration**:
   - Replace the DummyJSON API with a custom backend to store all product data.

2. **Authentication**:
   - Add user authentication for personalized product management.

3. **Pagination**:
   - Implement pagination for better handling of large product lists.

4. **Search and Filters**:
   - Add search functionality and filters to refine product views.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/)
- [DummyJSON](https://dummyjson.com/)
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { state } = useAppContext();

  // Calculate cart count
  const cartCount = Object.keys(state.cart).reduce(
    (count, id) => count + state.cart[id].quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm p-3" >
      <div className="container">
        {/* Company Logo */}
        <Link to="/" className="navbar-brand">
          MyShop
        </Link>

        {/* Navbar Toggler (For Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/liked" className="nav-link">
                Liked Products
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item nav-icon">
              <Link to="/liked" className="nav-link position-relative">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </li>
            <li className="nav-item nav-icon">
              <Link to="/cart" className="nav-link position-relative">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartCount > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

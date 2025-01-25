import React from "react";
import { useAppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function ProductList({ products }) {
  const { state, dispatch } = useAppContext();

  return (
    
      <div className="row g-4">
        {products?.map((product) => {
          const inCart = state.cart[product.id]?.quantity || 0;
          const liked = !!state.liked[product.id];

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-truncate">
                    {product.description.substring(0, 60)}...
                  </p>
                  <p className="text-success fw-bold">${product.price}</p>
                  <div className="mt-auto">
                    {inCart > 0 ? (
                      <div className="increment-decrement-ui d-flex align-items-center justify-content-center">
                        {/* Decrement Button */}
                        <button
                          onClick={() =>
                            dispatch({
                              type: "DECREMENT_CART",
                              payload: product,
                            })
                          }
                          className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        {/* Count Display */}
                        <div
                          className="count-display mx-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: "50px",
                            height: "40px",
                            backgroundColor: "white",
                            border: "1px solid red",
                            borderRadius: "5px",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          {inCart}
                        </div>

                        {/* Increment Button */}
                        <button
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: product,
                            })
                          }
                          className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: product,
                          })
                        }
                        className="btn btn-success add-btn"
                      >
                        <FontAwesomeIcon icon={faShoppingCart} className="add-cart-btn-icon"/>
                        Add to Cart
                      </button>
                    )}
                  </div>

                  {/* Like Button */}
                  <div className="mt-2 text-end">
                    <button
                      onClick={() =>
                        dispatch({ type: "TOGGLE_LIKE", payload: product })
                      }
                      className="btn btn-light p-2 like-icon"
                      style={{
                        color: liked ? "red" : "gray",
                        border: "1px solid lightgray",
                        borderRadius: "50%",
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
   
  );
}

export default ProductList;

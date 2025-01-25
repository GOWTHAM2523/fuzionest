import React from "react";
import { useAppContext } from "../context/AppContext";

function CartPage() {
  const { state, dispatch } = useAppContext();

  // Get all items in the cart
  const cartItems = Object.values(state.cart);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h4 className="text-center mb-4">Your Cart</h4>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty.</div>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((item) => (
              <div key={item.id} className="col-12">
                <div className="card p-3 shadow-sm">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-2">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ height: "100px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">{item.description}</p>
                      <p className="fw-bold mb-0">Price: ${item.price}</p>
                      <p className="text-muted">Quantity: {item.quantity}</p>
                    </div>
                    <div className="col-md-4 text-end">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "DECREMENT_CART",
                            payload: { id: item.id },
                          })
                        }
                        className="btn btn-outline-danger btn-sm me-2"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: { id: item.id },
                          })
                        }
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-4 p-3 border-top">
            <h4 className="text-end">Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

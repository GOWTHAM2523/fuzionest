import React from "react";
import { useAppContext } from "../context/AppContext";

function LikedProductsPage() {
  const { state, dispatch } = useAppContext();

  // Get all liked items from state
  const likedItems = Object.values(state.liked);

  return (
    <div className="container my-4">
      <h4 className="mb-4 text-center">Liked Products</h4>

      {likedItems.length === 0 ? (
        <div className="alert alert-info text-center">
          You have no liked products.
        </div>
      ) : (
        <div className="row g-4">
          {likedItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-truncate">
                    {item.description.substring(0, 100)}...
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <p className="text-success fw-bold mb-0">${item.price}</p>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_LIKE",
                        payload: { id: item.id },
                      })
                    }
                    className="btn btn-danger btn-sm"
                  >
                    Unlike
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedProductsPage;

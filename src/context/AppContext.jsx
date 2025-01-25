import React, { createContext, useContext, useReducer, useEffect } from "react";

const AppContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || {},
  liked: JSON.parse(localStorage.getItem("liked")) || {},
};

function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newCart = {
        ...state.cart,
        [action.payload.id]: {
          ...action.payload,
          quantity: (state.cart[action.payload.id]?.quantity || 0) + 1,
        },
      };
      localStorage.setItem("cart", JSON.stringify(newCart)); // Save to local storage
      return { ...state, cart: newCart };
    }
    case "DECREMENT_CART": {
      const newCart = { ...state.cart };
      if (newCart[action.payload.id].quantity > 1) {
        newCart[action.payload.id].quantity -= 1;
      } else {
        delete newCart[action.payload.id];
      }
      localStorage.setItem("cart", JSON.stringify(newCart)); // Save to local storage
      return { ...state, cart: newCart };
    }
    case "REMOVE_FROM_CART": {
      const newCart = { ...state.cart };
      delete newCart[action.payload.id];
      localStorage.setItem("cart", JSON.stringify(newCart)); // Save to local storage
      return { ...state, cart: newCart };
    }
    case "TOGGLE_LIKE": {
      const newLiked = { ...state.liked };
      if (newLiked[action.payload.id]) {
        delete newLiked[action.payload.id];
      } else {
        newLiked[action.payload.id] = action.payload;
      }
      localStorage.setItem("liked", JSON.stringify(newLiked)); // Save to local storage
      return { ...state, liked: newLiked };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

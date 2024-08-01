// Code below will help access and update global state and store from anywhere in the application
import { createSlice } from '@reduxjs/toolkit';

//Function created that will have the cart set to false once App is opened
const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
}

// This function is for changing items to equal what is being passed into when there is setItems
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
        state.items = action.payload;
    },

    // Specifically to update what is in the cart
    addToCart: (state, action) => {
        state.cart = [...state.cart, action.payload.item]
    },

    // To remove what is in the cart
    removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },

    // This will determine the change/increase of number of items
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item
      });
    },

    // This will determine the change/decrease of number of items
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item
      });
    },

    // To open the cart menu
    setIsCartOpen: (state) => {
        state.isCartOpen = !state.isCartOpen;
    }
  }
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
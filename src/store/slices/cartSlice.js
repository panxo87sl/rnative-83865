import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "Demo",
    updateAt: new Date().toLocaleDateString(),
    cartItems: [],
    totalItems: 0,
    total: 0,
  },
  reducers: {
    addItemCart: (state, action) => {
      const { product, quantity } = action.payload;
      const productInCart = state.cartItems.find((auxProduct) => auxProduct.id === product.id);
      if (!productInCart) {
        state.cartItems.push({ ...product, quantity });
        console.log(
          "Desde cartSlice - Producto NUEVO agregado al carrito: ",
          product.title,
          quantity
        ); //!LOG para ver productos agregado al carrito
      } else {
        productInCart.quantity++;
        console.log(
          "Desde cartSlice - Producto agregado al carrito: ",
          productInCart.title,
          productInCart.quantity
        ); //!LOG para ver productos agregado al carrito
      }
      state.total = state.cartItems.reduce(
        (acc, auxProduct) => acc + auxProduct.price * auxProduct.quantity,
        0
      );
      state.totalItems = state.cartItems.reduce((acc, auxProduct) => acc + auxProduct.quantity, 0);
      // console.log("Desde cartSlice - Carrito: ", state.cartItems); //!LOG para ver el carrito
    },
    removeItemsCart: (state, action) => {
      const { product, quantity } = action.payload;
      const productInCart = state.cartItems.find((auxProduct) => auxProduct.id === product.id);
      if (productInCart) {
        if (productInCart.quantity > 1) {
          productInCart.quantity--;
          console.log(
            "Desde cartSlice - Producto agregado al carrito: ",
            productInCart.title,
            productInCart.quantity
          ); //!LOG para ver producto eliminado del carrito
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== product.id);
        }
        state.total = state.cartItems.reduce(
          (acc, auxProduct) => acc + auxProduct.price * auxProduct.quantity,
          0
        );
        state.updateAt = new Date().toLocaleString();
      }
      state.totalItems = state.cartItems.reduce((acc, auxProduct) => acc + auxProduct.quantity, 0);
    },
    resetCart: (state, action) => {
      state.cartItems = [];
      state.updateAt = new Date().toLocaleString();
      state.total = 0;
      state.totalItems = state.cartItems.reduce((acc, auxProduct) => acc + auxProduct.quantity, 0);
    },
  },
});

export const { addItemCart, removeItemsCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

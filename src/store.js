import cartReducer from './features/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import  modalReducer  from './features/modal/modalSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal:modalReducer
  },
})

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

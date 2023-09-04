import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems : [],
    amount: 3,
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (name, thunkAPI) => {
      try {
        const resp = await axios(url);
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );

const cartSlice = createSlice({
    name: 'cart',
    initialState
})

export default cartSlice.reducer;
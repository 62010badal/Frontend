import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUserOrder } from './userAPI';

const initialState = {
  userOrders: [],
  status: 'idle',
};

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchLoggedInuserOrder',
  async (id) => {
    const response = await fetchLoggedInUserOrder(id);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from logged-in use info
       state.userOrders = action.payload;
      });
  },
});

export const { increment} = userSlice.actions;

export const selectUserOrders = (state) => state.user.orders;

export default userSlice.reducer;

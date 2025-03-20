import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../constants/apiUrls";

interface Item {
  id: number;
  name: string;
  email: string;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get(`${API_URLS.baseURl}/users`);
  return response.data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default itemsSlice.reducer;

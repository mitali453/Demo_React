import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URLS } from "../constants/apiUrls";

interface Item {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface ItemDetailsState {
  item: Item | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: ItemDetailsState = {
  item: null,
  loading: false,
  error: null,
};

// Async Thunk for fetching item details
export const fetchItemDetails = createAsyncThunk(
  "itemDetails/fetchItemDetails",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URLS.baseURl}/users/${id}`);
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch details");
    }
  }
);

// Slice
const itemDetailsSlice = createSlice({
  name: "itemDetails",
  initialState,
  reducers: {
    clearItemDetails: (state) => {
      state.item = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItemDetails.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchItemDetails.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { clearItemDetails } = itemDetailsSlice.actions;
export default itemDetailsSlice.reducer;

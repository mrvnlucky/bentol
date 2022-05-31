import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gasService from "./gasService";

const initialState = {
  gas: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new gas
export const createGas = createAsyncThunk(
  "gas/create",
  async (gasData, thunkAPI) => {
    try {
      return await gasService.createGas(gasData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get gas
export const getGas = createAsyncThunk("gas/getAll", async (_, thunkAPI) => {
  try {
    return await gasService.getGas();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete vehicle
export const deleteGas = createAsyncThunk(
  "gas/delete",
  async (id, thunkAPI) => {
    try {
      return await gasService.deleteGas(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update gas
export const updateGas = createAsyncThunk(
  "gas/update",
  async ({ id, gasData }, thunkAPI) => {
    try {
      return await gasService.updateGas(id, gasData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const gasSlice = createSlice({
  name: "gas",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createGas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gas.push(action.payload);
      })
      .addCase(createGas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getGas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gas = action.payload;
      })
      .addCase(getGas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteGas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gas = state.gas.filter((gas) => gas._id !== action.payload.id);
      })
      .addCase(deleteGas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateGas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateGas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.gas.push(action.payload);
      })
      .addCase(updateGas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = gasSlice.actions;
export default gasSlice.reducer;

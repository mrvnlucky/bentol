import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vehicleService from "./vehicleService";

const initialState = {
  vehicles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new vehicle
export const createVehicle = createAsyncThunk(
  "vehicles/create",
  async (vehicleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await vehicleService.createVehicle(vehicleData, token);
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

// Get vehicles
export const getVehicles = createAsyncThunk(
  "vehicles/getAll",
  async (_, thunkAPI) => {
    try {
      return await vehicleService.getVehicles();
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

// Get vehicle by id
export const getVehicleById = createAsyncThunk(
  "vehicles/getById",
  async (id, thunkAPI) => {
    try {
      return await vehicleService.getVehicleById(id);
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

// Delete vehicle
export const deleteVehicle = createAsyncThunk(
  "vehicles/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await vehicleService.deleteVehicle(id, token);
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

// Update vehicle
export const updateVehicle = createAsyncThunk(
  "vehicles/update",
  async ({ id, vehicleData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().admin.admin.token;
      return await vehicleService.updateVehicle(id, vehicleData, token);
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

export const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles.push(action.payload);
      })
      .addCase(createVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles = action.payload;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getVehicleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles = action.payload;
      })
      .addCase(getVehicleById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles = state.vehicles.filter(
          (vehicle) => vehicle._id !== action.payload.id
        );
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicles.push(action.payload);
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = vehicleSlice.actions;
export default vehicleSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import vehicleReducer from "../features/vehicle/vehicleSlice";
import gasReducer from "../features/gas/gasSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vehicles: vehicleReducer,
    gas: gasReducer,
  },
});

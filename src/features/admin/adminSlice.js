import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

// Get admin from localStorage
const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register admin
export const register = createAsyncThunk(
  "admin/register",
  async (admin, thunkAPI) => {
    try {
      return await adminService.register(admin);
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

// Login admin
export const login = createAsyncThunk(
  "admin/login",
  async (admin, thunkAPI) => {
    try {
      return await adminService.login(admin);
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

// Logout admin
export const adminLogout = createAsyncThunk("admin/logout", async () => {
  await adminService.logout();
});

// // Edit admin profile
// export const editProfile = createAsyncThunk(
//   "admin/editprofile",
//   async (adminData, thunkAPI) => {
//     try {
//       // const token = thunkAPI.getState().admin.admin.token;
//       const token = thunkAPI.getState().admin.admin.token;
//       return await adminService.editProfile(adminData, token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(adminLogout.fulfilled, (state) => {
        state.admin = null;
      });
    // .addCase(editProfile.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(editProfile.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.admin = action.payload;
    // })
    // .addCase(editProfile.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    //   state.admin = null;
    // });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;

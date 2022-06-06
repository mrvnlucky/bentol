import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/users/";
const API_URL = "https://bentol-backend.herokuapp.com/api/v1/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Edit profile
const editProfile = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + "me", userData, config);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// const GetProfile = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.get(API_URL + "me", config);
//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }
//   return response.data;
// };

// // Get Profile
// const getProfile = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL + "me", config);

//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }

//   return response.data;
// };

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  editProfile,
  // getProfile,
};

export default authService;

import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/vehicles/";
// const API_URL = "https://bentol-backend.herokuapp.com/api/v1/vehicles/";

// Create new vehicle
const createVehicle = async (vehicleData) => {
  const response = await axios.post(API_URL, vehicleData);

  return response.data;
};

// Get vehicles
const getVehicles = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Update vehicle
const updateVehicle = async (vehicleId) => {
  const response = await axios.put(API_URL + vehicleId);

  return response.data;
};

// Delete vehicle by id
const deleteVehicle = async (vehicleId) => {
  const response = await axios.delete(API_URL + vehicleId);

  return response.data;
};

const vehicleService = {
  createVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle,
};
export default vehicleService;

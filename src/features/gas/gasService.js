import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/gas/";
const API_URL = "https://bentol-backend.herokuapp.com/api/v1/gas/";

// Create new gas
const createGas = async (gasData) => {
  const response = await axios.post(API_URL, gasData);

  return response.data;
};

// Get gas
const getGas = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// Update gas
const updateGas = async (gasId) => {
  const response = await axios.put(API_URL + gasId);

  return response.data;
};

// Delete gas by id
const deleteGas = async (gasId) => {
  const response = await axios.delete(API_URL + gasId);

  return response.data;
};

const gasService = {
  createGas,
  getGas,
  updateGas,
  deleteGas,
};
export default gasService;

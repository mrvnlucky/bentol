import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/gas/";
const API_URL = "https://bentol-backend.herokuapp.com/api/v1/gas/";

// Create new gas
const createGas = async (gasData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, gasData, config);

  return response.data;
};

// Get gas
const getGas = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getGasById = async (gasId) => {
  const response = await axios.get(API_URL + gasId);
  return response.data;
};

// Update gas
const updateGas = async (gasId, gasData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + gasId, gasData, config);

  return response.data;
};

// Delete gas by id
const deleteGas = async (gasId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + gasId, config);

  return response.data;
};

const gasService = {
  createGas,
  getGas,
  updateGas,
  deleteGas,
  getGasById,
};
export default gasService;

// src/api/userAPI.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const searchUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { email },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || error.response.data.error);
    } else if (error.request) {
      throw new Error('Could not connect to the server. Please try again later.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};
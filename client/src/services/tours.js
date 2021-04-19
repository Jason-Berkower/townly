import axios from "axios"

const apiURL = "http://localhost:4567/api"

export const createTour = async (tour) => {
  const response = axios.post(`${apiURL}/tours`, tour);
  return response.data;
};
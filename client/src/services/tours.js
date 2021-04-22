
import api from "./apiConfig";

export const getAllTours = async () => {
  try {
    const res = await api.get("/tours");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getTourById = async (id) => {
  let res = await api.get(`/tours/${id}`);
  return res.data;
};

export const createTour = async (tour) => {
  let res = await api.post("/tours", tour);
  return res.data;
};

export const updateTour = async (tour) => {
  let res = await api.put(`/tours/${tour._id}`, tour);
  return res.data;
};

export const deleteTour = async (id) => {
  let res = await api.delete(`/tours/${id}`);
  return res.data;
};


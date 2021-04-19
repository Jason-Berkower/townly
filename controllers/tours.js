const Tour = require("../models/tour");
const db = require("../db");

db.on("error", console.error.bind(console, "Mongo Connection Error:"));

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    res.status(200).json(tours);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneTour = async (req, res) => {
  try {
    const { id } = req.params;
    let tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    return res.status(200).json(tour);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createTour = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateTour = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteTour = async (req, res) => {
  try {
    const deletedTour = await Tour.findByIdAndDelete(req.params.id);
    if (!deletedTour) {
      return res.status(404).send("Tour not found.");
    }
    return res.status(200).send("Tour was deleted");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTours,
  getOneTour,
  createTour,
  updateTour,
  deleteTour,
};

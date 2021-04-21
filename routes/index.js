const { Router } = require("express");
const restrict = require("../helpers/restricted.js");
const {
  signUp,
  signIn,
  verify,
  changePassword,
  getAllUsers,
  getOneUser,
} = require("../controllers/users");
const {
  getAllTours,
  getOneTour,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tours");

const router = Router();

// For Users
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/verify", verify);
router.put("/change-password/:id", changePassword);
router.get("/users", getAllUsers),
router.get("/users/:id", getOneUser)

// For Tours
router.get("/tours", getAllTours);
router.get("/tours/:id", getOneTour);
router.post("/tours", restrict, createTour);
router.put("/tours/:id", restrict, updateTour);
router.delete("/tours/:id", restrict, deleteTour);

module.exports = router;

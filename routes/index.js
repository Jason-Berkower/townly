const { Router } = require("express");
const restrict = require("../helpers/restricted.js");
const {
  signUp,
  signIn,
  verify,
  changePassword,
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

// For Tours
router.get("/", getAllTours);
router.get("/:id", getOneTour);
router.post("/", restrict, createTour);
router.put("/:id", restrict, updateTour);
router.delete("/:id", restrict, deleteTour);

module.exports = router;
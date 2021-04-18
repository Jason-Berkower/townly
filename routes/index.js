const { Route } = require("express");
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
router.post();
router.put();
router.delete();

module.exports = router;

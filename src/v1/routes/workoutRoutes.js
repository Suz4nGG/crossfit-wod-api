const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");

router
  .get("/", workoutController.getAllWorkout)
  .get("/:workoutId", workoutController.getOneWorkout)
  .post("/", workoutController.createNewWorkout)
  .patch("/:workout", workoutController.updateOneWorkout)
  .delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;

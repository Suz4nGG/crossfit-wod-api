const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

const getAllWorkout = () => {
  const getAllWorkout = Workout.getAllWorkout();
  return getAllWorkout;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = (newWorkout) => {
  const newWorkoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-us", { timezone: "utc" }),
    updatedAt: new Date().toLocaleString("en-us", { timezone: "utc" }),
  };
  Workout.createNewWorkout(newWorkoutToInsert);
  return;
};
const updateOneWorkout = () => {
  return;
};
const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

const workoutService = require("../services/workoutServices");

const getAllWorkout = (req, res) => {
  const allWorkouts = workoutService.getAllWorkout();
  console.log(allWorkouts);
  res.send(allWorkouts);
};

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get wk ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  console.log("CC", body);
  // * Clausala de cierre, esperar primero los errores para salir cuanto antes
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createWorkout });
};

const updateOneWorkout = (req, res) => {
  const updateWorkout = workoutService.updateOneWorkout(req.params.workoutId);
  res.send(`Update wk ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
  const deleteWorkout = workoutService.deleteOneWorkout(req.params.workoutId);
  res.send(`Delete wk ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

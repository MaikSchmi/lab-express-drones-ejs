const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await DroneModel.find();
    res.render("drones/list", {allDrones: allDrones});
  } catch (error) {
    console.log("Error at: Drones / List: ", error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await DroneModel.create(req.body);
    res.redirect("/drones");
  } catch (error) {
    console.log("Error at: Drones / Create (Post): ", error);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const drone = await DroneModel.findById(req.params.id);
    res.render("drones/update-form", {drone: drone});
  } catch (error) {
    console.log("Error at: Drones / ID / Edit (GET): ", error);
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await DroneModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (error) {
    console.log("Error at: Drones / ID / Edit (POST): ", error);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await DroneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (error) {
    console.log("Error at: Drones / ID / Delete (POST): ", error);
  }
});

module.exports = router;

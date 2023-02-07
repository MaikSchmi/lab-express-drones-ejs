// Iteration #1
const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

const drones = [
    {
        name: "Drone-1",
        propellers: 4,
        maxSpeed: 25,
    },
    {
        name: "Drone-2",
        propellers: 6,
        maxSpeed: 50,
    },
    {
        name: "Drone-3",
        propellers: 10,
        maxSpeed: 100,
    },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`--- Created ${drones.length} drones! ---`);
    return DroneModel.create(drones);
  })
  .then((y) => {
    mongoose.connection.close()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
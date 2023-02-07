// Iteration #1
const {Schema, model} = require("mongoose");
const drone = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number,
});

const DroneModel = model("drone", drone);
module.exports = DroneModel;
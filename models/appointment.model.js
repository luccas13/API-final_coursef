const mongoose = require("mongoose");

const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    name: String,
    surname: String,
    dni: String,
    date: Date,
    point: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Point"
    },
  })
);

module.exports = Appointment;
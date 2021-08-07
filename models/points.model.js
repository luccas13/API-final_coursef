const mongoose = require("mongoose");

const Point = mongoose.model(
  "Point",
  new mongoose.Schema({
    name: String,
    address: String,
    lat: Number,
    lon: Number,
    img: String,
  })
);

module.exports = Point;
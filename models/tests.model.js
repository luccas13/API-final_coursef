const mongoose = require("mongoose");

const Test = mongoose.model(
  "Test",
  new mongoose.Schema({
    title: String,
    description: String,
  })
);

module.exports = Test;
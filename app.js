const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const dbConfig = require("./config/db.config");

// Import routes
const rootRouter = require('./routes/root.routes');
const testsRouter = require('./routes/tests.routes');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

// Mongodb init
mongoose
  .connect(dbConfig.dbPath, dbConfig.mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// Routes
app.use('/', rootRouter);
app.use('/', testsRouter);

app.listen(PORT, () => {
    console.log(`API connected successfully on port ${PORT}`);
});
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const dbConfig = require("./config/db.config");
const morgan = require('morgan');

// Import routes
const rootRouter = require('./routes/root.routes');
const testsRouter = require('./routes/tests.routes');
const pointsRouter = require('./routes/points.routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Point Model and Vaccination Point data
const Point = require('./models/points.model');
const vaccinationPoints = require('./data/vaccinationPoints.data.json').points;

app.use(morgan('dev'));

// Mongodb init
mongoose
  .connect(dbConfig.dbPath, dbConfig.mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    init();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// Routes
app.use('/', rootRouter);
app.use('/', testsRouter);
app.use('/', pointsRouter);

app.listen(PORT, () => {
    console.log(`API connected successfully on port ${PORT}`);
});

function init() {
  Point.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      vaccinationPoints.forEach(({name, address, lat, lon, img}) => {
        new Point({
          name,
          address,
          lat,
          lon,
          img,
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log(`added ${name} to points collection`);
        });
      });
    }
  });
}
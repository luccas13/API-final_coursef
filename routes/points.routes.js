const express = require('express');
const router = express.Router();
const pointsController = require('../controllers/points.controller');

router.get('/points', function(req, res) {
    pointsController.getPoints(req, res);
});

router.get('/points/:id', function(req, res) {
    pointsController.getPointsById(req, res);
});

module.exports = router;
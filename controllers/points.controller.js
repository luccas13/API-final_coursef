const pointServices = require('../services/db/points.services');

async function getPoints (req, res) {
    res.json(await pointServices.findPoints()); 
}

async function getPointsById (req, res) {
    const id = req.params.id
    res.json(await pointServices.findPointsById(id));
}

module.exports = { getPoints, getPointsById };
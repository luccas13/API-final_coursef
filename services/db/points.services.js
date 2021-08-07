const Point = require('../../models/points.model');

async function findPoints() {
    const points = await Point.find();
    return points;
}

async function findPointsById(id) {
    const points = await Point.find({_id: id});
    return points;
}

module.exports = { findPoints, findPointsById };
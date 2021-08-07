const Point = require('../../models/points.model');

async function findPoints() {
    const points = await Point.find();
    return points;
}

async function findPointsById(id) {
    const points = await (await Point.find()).filter(({_id}) => id == _id)[0];
    return points;
}

module.exports = { findPoints, findPointsById };
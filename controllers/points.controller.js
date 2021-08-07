// const testServices = require('../services/db/tests.services');

function getPoints (req, res) {
    res.json({message: 'get Points'});
}

function getPointsById (req, res) {
    res.json({message: 'get Point/id'});
}

module.exports = { getPoints, getPointsById };
const testServices = require('../services/db/tests.services');

function getTests (req, res) {
    res.json({message: 'get test'});
}

async function postTests (req, res) {
    res.json(await testServices.addTest(req, res)); 
}

module.exports = { getTests, postTests };
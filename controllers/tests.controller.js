const testServices = require('../services/db/tests.services');
const validationTest = require('../schema/test.schema');

function getTests (req, res) {
    res.json({message: 'get test'});
}

async function postTests (req, res) {
    const data = req.body
    console.log(typeof(req.body.title));
    try{
        validationTest(data);
    } catch(err){
        return res.send({message: 'ERROR'});
    };
    res.json(await testServices.addTest(req, res));
}

module.exports = { getTests, postTests };
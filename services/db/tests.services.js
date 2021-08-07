// const mongoose = require('mongoose');
const Test = require('../../models/tests.model');

async function addTest(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const test = new Test({ title, description });
    await test.save(err => {
        if (err) return console.log(err);
        return console.log(`${JSON.stringify(test)} added in mongodb`);
    });
    return {status: 'ok'};
}

module.exports = { addTest };
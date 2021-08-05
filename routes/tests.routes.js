const express = require('express');
const router = express.Router();
const testsController = require('../controllers/tests.controller');

router.get('/tests', function(req, res) {
    testsController.getTests(req, res);
});

router.post('/tests', function(req, res) {
    testsController.postTests(req, res);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const rootController = require('../controllers/root.controller');

router.get('/', function(req, res) {
    rootController.helloFront(req, res);

})

module.exports = router;
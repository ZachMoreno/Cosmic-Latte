'use strict';

const express = require('express');
const router  = express.Router();
const verify  = require('./../../verify');
const config  = require('./../../config');

router.get('/dashboard', verify, (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

module.exports = router;

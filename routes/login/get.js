'use strict';

const express = require('express');
const router  = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

module.exports = router;

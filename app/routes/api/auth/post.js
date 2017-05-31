'use strict';

const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const config  = require('./../../../config');

const db = {
    users: [{
        email: 'xachmoreno@gmail.com',
        password: 'IMustNotTellLies'
    }]
}

/*
    req.body = {
        email: STRING,
        password: STRING
    }
*/
router.post('/auth', (req, res) => {
    // validate payload
    if(req.body.email && req.body.password) {
        // check against db
        if(req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
            // mint a new token
            const token = jwt.sign({ email: req.body.email }, config.secret);

            res.status(200).send({
                status: 'A OK',
                token: token
            });
        } else {
            res.send({
                status: 'error',
                message: 'failed in authenticate user'
            });
        }
    } else {
        res.send({
            status: 'error',
            message: 'failed in include email or password'
        });
    }


});

module.exports = router;

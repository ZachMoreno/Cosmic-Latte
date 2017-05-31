'use strict';

const jwt    = require('jsonwebtoken');
const config = require('./config');

const verify = (req, res, next) => {
    var token = req.header('auth-token');

    jwt.verify(token, config.secret, (error, decoded) => {
        if(!error && decoded) {
            next();
        } else {
            res.send({
                status: 'error',
                message: 'failed to decode token'
            });
        }
    });
};

module.exports = verify;

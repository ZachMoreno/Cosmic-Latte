'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const config      = require('./config');
const cosmicLatte = express();

cosmicLatte.use(bodyParser.json());
cosmicLatte.use(bodyParser.urlencoded({ extended: false }));

const routes = {
    api: {
        auth: {
            post: require('./routes/api/auth/post')
        }
    },
    login: {
        get: require('./routes/login/get')
    },
    dashboard: {
        get: require('./routes/dashboard/get')
    }
};

cosmicLatte.use('/api', routes.api.auth.post);
cosmicLatte.use(routes.login.get);
cosmicLatte.use(routes.dashboard.get);

cosmicLatte.listen(config.server.port, () => {
    console.log('Cosmic Latte is up @ http://localhost:' + config.server.port);
});

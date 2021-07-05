const express = require('express');

const app = express();

/**
 * importing database connection
 */
require('./db/db');

/**
 * global logging package for incomming request
 */
const morgan = require('morgan');
app.use(morgan('dev'));

/**
 * Importing logger for logging messages
 */
const logger = require('./handlers/logging');
const loggingObj = require('./helpers/createLoggingObject')

/**
 * Handling Json and url encoded Data
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * Handling cors
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.message == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/**
 * Handling Other Routes For Application
 */
const exampleRoutes = require('./routes/example');
app.use('/example', exampleRoutes);

/**
 * Handling 404 error if no route is matched
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    logger.info(loggingObj(req ,'Resource Not Found'));
    error.status = 404;
    next(error);
});

/**
 * Handle All Errors in the application
 * returns status code of error or 500 if no status code found in Error object
 */
const responseHendler = require('./handlers/response');
app.use((error, req, res, next) => {
    let status = error.status || 500;
    res.json(responseHendler.createErrorResponse(status, (status == 500 ? 'Something went wrong while processing your request':'The Resource you are looking for not found'), error));
});

module.exports = app;
const logger = require('../handlers/logging');
const loggingObj = require('../helpers/createLoggingObject');

module.exports.getAllExamples = (req, res, next) =>{
    res.status(200).json({message: " From Get "})
}

module.exports.getAllExamplesById = (req, res, next) =>{
    logger.info(loggingObj(req ,'In getAllExamplesById'));
    res.status(200).json({message: " From Get By Id "})
}
module.exports = ( req, message ) => {
    return {
        url: req.originalUrl,
        queryParams: req.query,
        pathParams: req.params,
        message: message
    }
}
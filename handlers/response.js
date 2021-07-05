module.exports.createSuccessResponse = ( statusCode, message, data ) => {
    return {
        status: 'success',
        statusCode: statusCode,
        message: message,
        data: data
    }
} 

module.exports.createErrorResponse = ( statusCode, message, err ) => {
    return {
        status: 'error',
        statusCode: statusCode,
        message: message,
        err: err.message
    }
} 


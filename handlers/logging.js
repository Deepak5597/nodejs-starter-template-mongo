const path = require('path');
const bunyan = require('bunyan');
const RotatingFileStream = require('bunyan-rotating-file-stream');

const level = process.env.LOGGING_LEVEL || 'info';

const log = bunyan.createLogger({
    name: 'all',
    streams: [
        {
            level,
            stream: process.stdout
        },
        {
            level,
            stream: new RotatingFileStream({
                path: path.resolve(__dirname, '..', '..' ,'logs.json'),
                period: '1d',          // daily rotation
                totalFiles: 10,        // keep up to 10 back copies
                rotateExisting: true,  // Give ourselves a clean file when we start up, based on period
                threshold: '10m',      // Rotate log files larger than 10 megabytes
                totalSize: '20m',      // Don't keep more than 20mb of archived log files
                gzip: true             // Compress the archive log files to save space
            })
        }
    ]
});

module.exports = log;   
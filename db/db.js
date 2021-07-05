const mongoose = require('mongoose');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_NAME || 'cp';
const username = process.env.DB_USERNAME || 'mongo';
const password = process.env.DB_PASSWORD || '';

const mongooseConfig = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    poolSize: 10
};
const connectionString = `mongodb://${host}:${port}/${database}`;
// const connectionStringWithUsernameAndPassword = `mongodb://${username}:${password}@${host}:${port}/${database}`;


mongoose.connect(connectionString, mongooseConfig , (error)=>{
    if(error){
        console.error("Error connecting to mongodb " + error);
    }else{
        console.log("Successfully connected to mongodb");
    }
});
module.exports = mongoose;
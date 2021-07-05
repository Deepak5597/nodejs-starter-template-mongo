const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({

    field1:{
        type: String,
        required: true
    },
    field2:{
        type: String
    }

});

module.exports = mongoose.model('Example', exampleSchema);

/** Handling Validations */

// Example.schema.path('field1').validate(()=>{
//     return false;
// },'Validation Failed For Field 1');
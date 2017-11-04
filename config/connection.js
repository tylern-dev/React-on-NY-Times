const mongoose = require('mongoose')

module.exports = function(){
    mongoose.Promise = global.Promise;

    process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist',
    {
        useMongoClient: true
    }
}


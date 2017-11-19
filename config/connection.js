// const mongoose = require('mongoose')

module.exports = function(mongoose){
    mongoose.Promise = global.Promise;


    
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/reactnytlist",
        {
          useMongoClient: true
        }
      );

    let dbConnect = mongoose.connection;
    dbConnect.on("error", function (error) {
        console.log("Mongoose Error: ", error);
    });
    dbConnect.once('open', function () {
        console.log('You are connected to the DB!!!!!!!!!');
    });
}


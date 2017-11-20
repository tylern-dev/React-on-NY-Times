
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//configure body parser for the AJAX requests
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());



// serve the react app
app.use(express.static(path.join(__dirname, 'client/build')));

// db connection
require('./config/connection')(mongoose)

// API routes
require('./routes/api-routes')(app)



// start api server
app.listen(port, function() {
    console.log(`API Server listening on PORT ${port}`)
})




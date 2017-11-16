
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

//configure body parser for the AJAX requests
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());



// serve the react app
app.use(express.static('nytreact/build'));

// db connection
require('./config/connection')

// API routes
require('./routes/api-routes')(app)



// start api server
app.listen(port, function() {
    console.log(`API Server listening on PORT ${port}`)
})




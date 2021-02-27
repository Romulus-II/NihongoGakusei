const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
//const mongoose = require('mongoose');
const path = require('path');
const app = express();
const serv = require('http').Server(app);

// Set up view engine
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine','ejs');


app.use('/client', express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
// Do not display secret
app.use(session({secret: "abdj348t01ignjfq0ifjdkaf", resave: false, saveUninitialized: true}))


var routes = require('./routes/index.js');

app.use('/', routes);

serv.listen(5000);
console.log("Server started.");

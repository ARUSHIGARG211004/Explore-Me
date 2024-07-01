const express = require('express');
const mongoose = require('mongoose');


require('./db/config'); 
const User= require("./db/User");
const signup= require("./signup");
const login= require("./login");
const collectionapi= require('./collection');
const saveImageapi= require('./saveImage');

const app = express();

app.use(express.json());



app.use(signup);
app.use(login);
app.use(collectionapi);
app.use(saveImageapi);
app.listen(3000);
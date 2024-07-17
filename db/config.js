

// // db/config.js

const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/Explore-Me"; // Replace with your MongoDB URI


//Updated configuration without useUnifiedTopology
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


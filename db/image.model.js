const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  image: String,
  text: String,
  similar_images: [String]
});

module.exports = mongoose.model('Image', imageSchema);

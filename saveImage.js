const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('./db/image.model');

router.post('/save-image', async (req, res) => {
    console.log('req.body:', req.body);
  try {
    if (!req.body.userId) {
      return res.status(400).send({ message: 'Missing userId' });
    }

    const userId = new mongoose.Types.ObjectId(req.body.userId);
    const image = req.body.image;
    const text = req.body.text;
    const similar_images = req.body.similar_images;

    // Save the generated text and similar images to the database
    const imageDoc = new Image({
      userId,
      image,
      text,
      similar_images
    });
    await imageDoc.save();

    res.json({ message: 'Image saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error saving image' });
  }
});

module.exports = router;
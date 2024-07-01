const express = require('express');
const router = express.Router();
const Image = require('./db/image.model');

router.get('/collection', async (req, res) => {
  try {
    const userId = req.query.userId; 
    if (!userId) {
      return res.status(400).send({ message: 'UserId is required' });
    }
    const images = await Image.find({ userId });
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Error retrieving collection' });
  }
});


module.exports = router;
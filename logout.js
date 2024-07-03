const express = require('express');
const router = express.Router();
const User = require("./db/User");

router.post('/logout', async (req, res) => {
    try {
        await User.deleteOne({ email:req.body.email});
        res.send({ message: 'Logged out successfully.' });
    } catch (error) {
        res.status(500).send({ error: 'Error logging out.' });
    }
})

module.exports=router;
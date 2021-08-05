const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&skip=${req.query.skip}&name=${req.query.name}`,
        );

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

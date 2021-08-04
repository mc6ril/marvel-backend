const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/comics', async (req, res) => {
    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.end.MARVEL_API_KEY}`,
        );

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

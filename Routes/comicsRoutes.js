const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/comics', async (req, res) => {
    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&skip=${req.query.skip}&title=${req.query.title}`,
        );

        //a rajouter à la requête :

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/comics/:id', async (req, res) => {
    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`,
        );

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/comic/:id', async (req, res) => {
    try {
        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`,
        );

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/comics', async (req, res) => {
    try {
        const filter = {};

        const api_key = process.env.MARVEL_API_KEY;

        const { title, limit, apiKey } = req.query;

        // filtre par titre
        if (title) {
            let result = new RegExp(title, 'i');
            filter.title = result;
        }

        //Pagination
        let page;
        const newLimit = Number(limit);
        if (Number(limit) < 1) {
            page = 1;
        } else {
            page = Number(page);
        }
        const skip = limit * (page - 1);

        const response = await axios.get(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`,
        );

        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

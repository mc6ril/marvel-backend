const express = require('express');
const formidable = require('express-formidable');
const cors = require('cors');
const app = express();
app.use(formidable());
app.use(cors());
const mongoose = require('mongoose');

const axios = require('axios');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Import des routes
const comicsRoute = require('./Routes/comicsRoutes');
app.use(comicsRoute);
const charactersRoute = require('./Routes/charactersRoutes');
app.use(charactersRoute);
const userRoutes = require('./Routes/userRoutes');
app.use(userRoutes);

// Initialisation des routes

app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenue sur l'API Marvel !" });
});

app.all('*', (req, res) => {
    res.status(404).json({ message: 'Page not found' });
});

app.listen(process.env.PORT, () => {
    console.log('Server Started');
});

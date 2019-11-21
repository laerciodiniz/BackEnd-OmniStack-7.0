const express = require('express');
const mongoose = require('mongoose');

const { DATABASE_URL } = require('./config/security');

const app = express();

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(require('./routes'));

app.listen(3333);
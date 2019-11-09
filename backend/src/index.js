const express = require('express');
const mongoose = require('mongoose');

const {userMongoDB, passwordMongoDB} = require('./config/security');

const app = express();

mongoose.connect(`mongodb+srv://${userMongoDB}:${passwordMongoDB}@cluster0-r4hcb.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(require('./routes'));

app.listen(3333);
const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', function (req, res) {
 return res.send(process.env.CLIENT_ID);
});

app.get('/disocvery', function(req, res) {
    return res.send('example')
});

app.listen(process.env.PORT || 8080);


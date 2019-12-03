const express = require('express');
const app = express();
const https = require('https');

app.get('/', function (req, res) {
 return res.send('Welcome To The Frog Vlog');
});

app.get('/disocvery', function(req, res) {
    return res.send('example')
});

app.listen(process.env.PORT || 8080);


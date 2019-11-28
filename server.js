const express = require('express');
const app = express();

app.get('/', function (req, res) {
 return res.send('Welcome To The Frog Vlog');
});

app.get('/test', function(req, res) {
    return res.send('example')
});

app.listen(process.env.PORT || 8080);


const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config()

const config = {
  headers: {
    'Client-ID': process.env.CLIENT_ID
  }
}
const baseUrl = 'https://api.twitch.tv/helix/'

app.get('/games', function (req, res) {
  getGames().then(data => res.json(data))
});

app.get('/disocvery', function (req, res) {
  return res.send('example')
});

app.listen(process.env.PORT || 8080);

function getGames() {
  return axios.get(baseUrl + 'games/top', config).then(response => {
      console.log(response.data);
      return response.data
    })
}
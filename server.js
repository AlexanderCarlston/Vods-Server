const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors')
require('dotenv').config()

const config = {
  headers: {
    'Client-ID': process.env.CLIENT_ID
  }
}
const baseUrl = 'https://api.twitch.tv/helix/'

app.use(cors())

app.get('/games', function (req, res) {
  return getGames().then(data => res.json(data))
});

app.get('/games/:id', function (req, res) {
  return getVideosFromGame(req.params.id).then(data => res.json(data))
});

app.listen(process.env.PORT || 8080);

function getGames() {
  return axios.get(baseUrl + 'games/top', config).then(response => {
      console.log(response.data);
      return response.data
    })
}

function getVideosFromGame(gameId) {
  return axios.get(baseUrl + `videos?game_id=${gameId}`, config).then(response => {
    console.log(response.data);
    return response.data
  })
}
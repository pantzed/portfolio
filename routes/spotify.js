const express = require('express');
const axios = require('axios');
const router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let currentCode = 'AQBKo_M5zTuxLJHWX2evC_DMkS9zDneZg6WxZUSIYclZgoMvjaim4Pfwnh1yM_I0AHPf3pIAZWXeU4guJFlnAeo5SansT9abkv3t7ngUIQbrkFjsHeAcfli5txgRUloi6QEjFwVyDuEg7El_OhtsYa5RwpETGhwzfVjw2mG-XIfrXD7SCyJGbr4zfaAwr1hcXinLsvKrsxNSTqwrYE3t4nhsKUJwlJejMw';

let postAuth = {
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST',
  params: {
    grant_type: 'authorization_code',
    code: currentCode,
    redirect_uri: 'http://localhost:3000/',
    client_id: 'a6e23968e076497aacf1ababec9b9ff6',
    client_secret: 'f130d4f5480e4c29a8aac256b3d2a723'
  }
};

let refreshAuthToken = {
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST',
  params: {
    grant_type: 'refresh_token',
    refresh_token: '',
    redirect_uri: 'http://localhost:3000/',
    client_id: 'a6e23968e076497aacf1ababec9b9ff6',
    client_secret: 'f130d4f5480e4c29a8aac256b3d2a723'
  }
}

let getAuth = {
  url: 'https://accounts.spotify.com/authorize',
  method: 'GET',
  params: {
    redirect_uri: 'http://localhost:3000/',
    response_type: 'code',
    client_id: 'a6e23968e076497aacf1ababec9b9ff6',
    client_secret: 'f130d4f5480e4c29a8aac256b3d2a723',
    scope: 'user-read-currently-playing'
  }
}


// axios(getAuth)
// .then((res) => {
//   console.log(res);
// })
// .catch(function (error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//     console.log(error.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message);
//   }
//   console.log(error.config);
// });


axios(postAuth)
.then((res) => {
  console.log(res.data);
  accessToken = res.data.access_token;
  refreshAuthToken.params.refresh_token = res.data.refresh_token;
  console.log(refreshAuthToken);
})
.catch(function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
});

function refreshSpotify(){
  axios(refreshAuthToken)
  .then((res) => {
    accessToken = res.data.access_token;
    refreshToken = res.data.refresh_token;
    console.log(res.data);
  })
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
};

router.get('/playing', (req, res) => {
  console.log('HIT');
  res.send(`${currentCode}`);
});

setInterval(refreshSpotify, 320000);

module.exports = router;
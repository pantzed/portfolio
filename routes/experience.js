const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development'; 
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/', (req, res) => {
  knex('experience')
  .then((data) => {
    res.send(data);
  })
})

module.exports = router;
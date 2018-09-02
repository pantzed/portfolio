var express = require('express');
var router = express.Router();
const env = process.env.NODE_ENV || 'development'; // set environment
const config = require('../knexfile')[env]; // pull in correct db with env configs
const knex = require('knex')(config); // define database based on above

router.get('/', (req, res) => {
  knex('projects')
  .then((projects) => {
    res.send(projects);
  });
});

module.exports = router;
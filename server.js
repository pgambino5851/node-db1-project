const express = require('express');

const AccountRouter = require('./accounts/accountsRouters')

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter)

server.get('/', (req, res) => {
    res.send('<h3>Node + Knex Project 1</h3>');
  });

module.exports = server;
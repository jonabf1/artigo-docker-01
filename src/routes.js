const userPostgree = require('./app/models/User');
const userMongo = require('./app/schemas/User');
const express = require('express');
const routes = express.Router();

routes.post('/signUp-user', async (req , res) => {
const { name, email } = req.body;

const createMongo = await userMongo.create({ name, email });
const createPostgree = await userPostgree.create({ name, email });

return res.json({ createMongo, createPostgree })
});

routes.get('/show-user', async (req , res) => {  
  const mongo = await userMongo.find();
  const postgree = await userPostgree.findAll();
  
  return res.json({ mongo, postgree })
  });
  

module.exports = routes;
const userPostgree = require('./app/models/User');
const userMongo = require('./app/schemas/User');
const express = require('express');
const routes = express.Router();

routes.post('/user', async (req , res) => {
const { name, email } = req.body;

const createMongo = await userMongo.create({ name, email });
const createPostgree = await userPostgree.create({ name, email });

return res.json({ createMongo, createPostgree })
});

module.exports = routes;
const express = require('express');
const ROUTER = express.Router();

const main_controller = require('../controllers/main');

ROUTER.get('/', main_controller.GET_Index);
ROUTER.get('/profile', main_controller.GET_Profile);

module.exports = ROUTER; 
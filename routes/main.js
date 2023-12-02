const express = require('express');
const ROUTER = express.Router();

const main_controller = require('../controllers/main');

ROUTER.get('/', main_controller.GET_Index);

module.exports = ROUTER; 
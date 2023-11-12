const express = require('express');
const ROUTER = express.Router();

const main_controller = require('../controllers/main');

ROUTER.use(main_controller.GET_Index);


module.exports = ROUTER; 
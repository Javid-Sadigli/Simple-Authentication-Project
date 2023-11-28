const express = require('express');
const ROUTER  = express.Router();

const auth_controller = require('../controllers/auth');

ROUTER.use(auth_controller.CHECK_Logged_In);

ROUTER.get('/register', auth_controller.GET_Register);


module.exports = ROUTER; 
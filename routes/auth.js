const express = require('express');
const ROUTER  = express.Router();

const auth_controller = require('../controllers/auth');

ROUTER.use(auth_controller.CHECK_Logged_In);

ROUTER.get('/register', auth_controller.GET_Register);
ROUTER.get('/login', auth_controller.GET_Login);

ROUTER.post('/register', auth_controller.POST_Register);
ROUTER.post('/login', auth_controller.POST_Login);

module.exports = ROUTER; 
const express = require('express');
const ROUTER  = express.Router();

const auth_controller = require('../controllers/auth');

ROUTER.use(auth_controller.CHECK_Logged_In);



module.exports = ROUTER; 
const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

router.post('/add-user', userController.postAddUser);

router.get('/users', userController.getAddUser);

module.exports = router;
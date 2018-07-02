const express = require('express');
const UserController = require('../controllers/user');
const apiUser = express.Router();

apiUser.get('/user/:id', UserController.getUser);
apiUser.get('/user', UserController.getUsers);
apiUser.post('/user', UserController.saveUser);
apiUser.put('/user/:id', UserController.updateUser);
apiUser.delete('/user/:id', UserController.deleteUser);

module.exports = apiUser;

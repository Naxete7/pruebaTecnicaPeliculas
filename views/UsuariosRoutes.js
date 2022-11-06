const express = require('express');
const router = express.Router();
const { authBearerMiddleware, isValidRole, isvali, isValidUser } = require("../middlewares/authMiddleware")


const UsuarioControllers = require('../controllers/UsuarioControllers')
router.get('/:email', isValidUser(), UsuarioControllers.getData);
router.patch('/:email', isValidUser(), UsuarioControllers.patchUser);
router.delete('/:id', isValidRole("admin"), UsuarioControllers.deleteUser);

module.exports = router;
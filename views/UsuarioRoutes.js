const express = require('express');
const router = express.Router();
const { authBearerMiddleware, isValidRole, isvali, isValidUser } = require("../middlewares/authMiddleware")


const UsuarioControllers = require('../controllers/UsuarioControllers')


// router.get('/:email', isValidUsuario(), UsuarioControllers.getData);
// router.patch('/:email', isValidUsuario(), UsuarioControllers.patchUser);
// router.delete('/:id', isValidRol("admin"), UsuarioControllers.deleteUser);

module.exports = router;
const exprees = require('express');
const router = express.Router();

const MoviesRoutes = require('./views/MoviesRoutes');
const ShowsRoutes = require('./views/ShowsRoutes');
const UsersRoutes = require('./views/UsersRoutes');
const AuthRoutes = require('./views/AuthRoutes');
const { authBearerMiddleware, isValidRole } = require("./middlewares/authMiddleware")

router.use('/auth', AuthRoutes);
router.use('/movies', MoviesRoutes);
router.use('/shows', ShowsRoutes);
router.use(authBearerMiddleware)
router.use('/users', UsersRoutes);

module.exports = router;
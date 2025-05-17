const { register, login } = require('../controllers/authController')
const { authenticateToken } = require('../middlewares/authenticateToken')

const router = require('express').Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", authenticateToken);

module.exports = router;
const { verify } = require("jsonwebtoken");
const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");
const { verifyToken } = require("../controllers/middlewareController");

const router = require("express").Router();

//register
router.post("/register", authController.registerUser);

//login
router.post("/login", authController.loginUser);
//REFRESH
router.post("/refresh", authController.requestRefreshToken);
// LOGOUT
router.post("/logout", middlewareController.verifyToken, authController.userLogout);

module.exports = router;




const userRoute = require("express").Router();
const registerUser = require("../controllers/user/registerUser");

userRoute.post("/register", registerUser);

module.exports = userRoute;

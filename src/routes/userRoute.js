const userRoute = require("express").Router();
const loginUser = require("../controllers/user/loginUser");
const registerUser = require("../controllers/user/registerUser");

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

module.exports = userRoute;

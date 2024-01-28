const routes = require("express").Router();
const familyRoute = require("./familyRoute");
const userRoute = require("./userRoute");

routes.use("/tree", familyRoute);
routes.use("/user", userRoute);

module.exports = routes;

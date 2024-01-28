const routes = require("express").Router();
const treeRoute = require("./treeRoute");
const userRoute = require("./userRoute");

routes.use("/tree", treeRoute);
routes.use("/user", userRoute);

module.exports = routes;

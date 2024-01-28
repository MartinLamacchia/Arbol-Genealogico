const familyRoute = require("express").Router();
const createNewFamily = require("../controllers/family/createNewFamily");

familyRoute.post("/create", createNewFamily);

module.exports = familyRoute;

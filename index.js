require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./src/app");
const port = process.env.PORT;
const mongoDB = process.env.MONGODB;

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MongoDB");

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error the connection to MongoDB", error);
  });

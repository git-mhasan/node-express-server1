const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const usersRoutes = require("./routes/v1/users.route.js");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());


dbConnect();

app.use("/api/v1/user", usersRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my server.")
});

app.all("*", (req, res) => {
  res.send("NO route found.");
});

// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
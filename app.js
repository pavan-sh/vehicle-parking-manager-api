const express = require("express");
const app = express();
const vehicles = require("./src/routes/vehiclesRoutes");
const connectDB = require("./src/models/connect");
require("dotenv").config();

const cors = require("cors");

//middleware
const allowedOrigins = ["http://localhost:3000"];
app.use([
  express.json(),
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
]);

const port = 3001;

//connect db
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening"));
  } catch (error) {
    console.log("Error connecting to database.");
  }
};

start();

// routes
app.use("/api/v1/vehicles", vehicles);

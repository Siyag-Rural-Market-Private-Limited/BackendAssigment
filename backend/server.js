//@Global Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRoutes = require("./Routes/userRoutes");

const app = express();
app.use(cors());

//@Database Connection
const mongoDBURL = "yoour mongodb id";

mongoose.connect(mongoDBURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
});

app.use("/api", UserRoutes);

//@Home Route
app.get("/", (req, res) => {
  res.send("Home Route is Here");
});

//@Starting Server

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});

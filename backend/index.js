const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://csengineer23:Mongodb1990@cluster0.orl1kll.mongodb.net/resumeInfo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

// Create a schema for the service
const serviceSchema = new mongoose.Schema({
  title: String,
  icon: String,
});

// Create a model based on the schema
const Service = mongoose.model("Service", serviceSchema);

// Create a GET endpoint to retrieve the services

// Get all services
app.get("/services", (req, res) => {
  Service.find()
    .then((services) => {
      res.json(services);
    })
    .catch((error) => {
      console.error("Error fetching services:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching services" });
    });
});
// // User schema and model
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   userType: {
//     type: String,
//     enum: ["manufacturer", "transporter"],
//     required: true,
//   },
// });

// const User = mongoose.model("User", userSchema);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

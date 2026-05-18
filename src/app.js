const express = require("express");
const cors = require("cors");

const recipeRoutes = require("./routes/recipe.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Base Route
app.get("/", (req, res) => {
  res.json({
    message: "Global Kitchen API is running "
  });
});

// API Routes
app.use("/api", recipeRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
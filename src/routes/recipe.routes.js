const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipe.controller");

router.get("/recipes", recipeController.getRecipes);

router.post("/recipes", recipeController.createRecipe);

router.patch("/recipes/:id", recipeController.updateRecipe);

router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;
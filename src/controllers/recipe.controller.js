const recipeService = require("../services/recipe.service");

// GET /recipes
const getRecipes = async (req, res, next) => {
  try {
    const filter = req.query.category
      ? { category: req.query.category }
      : {};

    const recipes = await recipeService.getAllRecipes(filter);

    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

// POST /recipes
const createRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);

    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
};

// PATCH /recipes/:id
const updateRecipe = async (req, res, next) => {
  try {
    const updatedRecipe = await recipeService.updateRecipe(
      req.params.id,
      req.body
    );

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
};

// DELETE /recipes/:id
const deleteRecipe = async (req, res, next) => {
  try {
    const deletedRecipe = await recipeService.deleteRecipe(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe not found"
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
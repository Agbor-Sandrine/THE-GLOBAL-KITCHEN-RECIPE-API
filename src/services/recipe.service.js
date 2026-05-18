const Recipe = require("../models/recipe.model");

// GET all recipes (with optional filter)
const getAllRecipes = async (filter = {}) => {
  return await Recipe.find(filter);
};

// GET single recipe
const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

// CREATE recipe (business validation)
const createRecipe = async (data) => {
  if (data.cookingTime <= 0) {
    throw new Error("Cooking time must be greater than 0");
  }

  return await Recipe.create(data);
};

// UPDATE recipe
const updateRecipe = async (id, data) => {
  return await Recipe.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

// DELETE recipe
const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
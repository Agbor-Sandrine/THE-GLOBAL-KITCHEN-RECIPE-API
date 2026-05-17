const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true
    },

    ingredients: {
      type: [String],
      required: true
    },

    instructions: {
      type: String,
      required: true
    },

    cookingTime: {
      type: Number,
      required: true,
      min: 1
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true
    },

    category: {
      type: String,
      required: true,
      index: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
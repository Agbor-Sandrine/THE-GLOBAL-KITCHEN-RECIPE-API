# The Global Kitchen Recipe API

A RESTful API for managing recipes in a digital cookbook system.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cors

## Project Structure

src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
└── app.js

## Features

- Create recipes
- Read all recipes
- Update recipes (partial updates)
- Delete recipes
- Filter recipes by category
- MongoDB schema validation
- Global error handling
- 3-tier architecture (Routes, Controllers, Services, Models)

## Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/your-username/global-kitchen-api.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run server

```bash
npm run dev

# 🌐 API Endpoints

## Base URL
http://localhost:3000/api

## 📌 Recipes

### ➤ Get all recipes

GET /recipes

### ➤ Create recipe

POST /recipes
### ➤ Update recipe
PATCH /recipes/:id


### ➤ Delete recipe
DELETE /recipes/:id

### Filter by category
GET /recipes?category=African

## Example Request Body

   json
{
  "title": "Jollof Rice",
  "ingredients": ["Rice", "Tomatoes", "Pepper"],
  "instructions": "Cook everything together",
  "cookingTime": 45,
  "difficulty": "medium",
  "category": "African"
}


## Validation Rules

- All fields are required
- cookingTime must be a number
- difficulty values: easy | medium | hard
- category must be a string

## Architecture

This project follows a 3-layer architecture:

- Routes → API endpoints
- Controllers → request handling
- Services → business logic
- Models → database schema

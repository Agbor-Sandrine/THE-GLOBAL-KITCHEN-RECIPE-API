require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

// Connect to database FIRST
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
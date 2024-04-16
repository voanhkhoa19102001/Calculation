const express = require("express");
const pool = require("../src/DBPG");
const router = express.Router();

// Add route to perform addition calculation
router.post("/add", async (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

// Add more routes for other calculations (subtract, multiply, divide, etc.)

module.exports = router;
const client = new Client({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  password: "Vak102001",
  port: 5432,
});

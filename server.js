const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const port = 5000; // Định nghĩa cổng 3000 cho server

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  password: "Vak102001",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/calculate", async (req, res) => {
  var { num1, num2 } = req.body;
  var sum = +num1 + +num2;
  try {
    // Thực hiện truy vấn để lưu kết quả vào cơ sở dữ liệu
    const client = await pool.connect();
    const query =
      "INSERT INTO calculations (num1, num2, sum) VALUES ($1, $2, $3)";
    const values = [num1, num2, sum];
    await client.query(query, values);
    client.release();

    res.json({ sum }); // Trả về kết quả tính toán cho frontend
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  res.status(200).send("Numbers received by backend");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

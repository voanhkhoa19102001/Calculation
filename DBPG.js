// backend.js
const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// Kết nối tới cơ sở dữ liệu PostgreSQL
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
  password: "Vak102001",
  port: 5432,
});

// // Sử dụng bodyParser để phân tích các request body dưới dạng JSON
// app.use(bodyParser.json());

// // Xử lý yêu cầu POST tới đường dẫn '/calculate'
// app.post("/calculate", async (req, res) => {
//   // Lấy dữ liệu được gửi từ frontend
//   const { a, b } = req.body;

//   // Thực hiện tính toán (ở đây là tính tổng)
//   const sum = a + b;

//   try {
//     // Lưu trữ kết quả vào cơ sở dữ liệu PostgreSQL
//     const client = await pool.connect();
//     const query =
//       "INSERT INTO calculation (number1, number2, result) VALUES ($1, $2, $3)";
//       "INSERT INTO public.calculation( num1, num2, sum) VALUES (z)";
//     const values = [a, b, sum];
//     await client.query(query, values);
//     client.release();

//     // Trả về kết quả tính toán cho frontend
//     res.json({ sum });
//   } catch (error) {
//     console.error("Error saving calculation result:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// Khởi động server
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());


// =============================
// Root Route
// =============================

app.get("/", (req, res) => {
  res.send("EatBetter Backend is running!");
});


// =============================
// Test Database
// =============================

app.get("/test-db", (req, res) => {

  db.query("SELECT * FROM users", (err, results) => {

    if (err) {
      return res.json({ error: err });
    }

    res.json(results);

  });

});


// =============================
// User Routes
// =============================

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);


// =============================
// Rating Routes
// =============================

const ratingRoutes = require("./routes/rating");
app.use("/rating", ratingRoutes);



// =============================
// PLACE ORDER API (COD)
// =============================

app.post("/place-order", (req, res) => {

  const { name, phone, address, city, items, total } = req.body;

  const sql = `
  INSERT INTO orders
  (name, phone, address, city, items, total, payment_status)
  VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      phone,
      address,
      city,
      JSON.stringify(items),
      total,
      "cod"
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database error"
        });
      }

      res.json({
        success: true,
        orderId: result.insertId
      });

    }
  );

});

// =============================
// CONTACT FORM API
// =============================

app.post("/contact", (req, res) => {

  const { name, email, message } = req.body;

  const sql = `
  INSERT INTO contact_messages
  (name, email, message)
  VALUES (?, ?, ?)
  `;

  db.query(sql, [name, email, message], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json({
        success:false,
        message:"Database error"
      });
    }

    res.json({
      success:true,
      message:"Message stored successfully"
    });

  });

});

// =============================
// SERVER START
// =============================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


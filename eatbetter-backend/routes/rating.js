const express = require("express");
const router = express.Router();
const db = require("../db");

// ⭐ Add a new review
router.post("/add", (req, res) => {
  const { product_id, user_id, rating, review } = req.body;

  const sql =
    "INSERT INTO ratings (product_id, user_id, rating, review) VALUES (?, ?, ?, ?)";
  db.query(sql, [product_id, user_id, rating, review], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Review added successfully" });
  });
});

// ⭐ Get all reviews of a product (alias route: /reviews/:productId)
router.get("/reviews/:productId", (req, res) => {
  const productId = req.params.productId;

  const sql = "SELECT * FROM ratings WHERE product_id = ?";
  db.query(sql, [productId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
});

// ⭐ Get ratings of a product (original route: /:productId)
router.get("/:productId", (req, res) => {
  const productId = req.params.productId;

  const sql = "SELECT * FROM ratings WHERE product_id = ?";
  db.query(sql, [productId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
});

// ⭐ Get average rating and total reviews of a product
router.get("/average/:productId", (req, res) => {
  const productId = req.params.productId;

  const sql = `
    SELECT 
      AVG(rating) as averageRating,
      COUNT(*) as totalReviews
    FROM ratings
    WHERE product_id = ?
  `;
  db.query(sql, [productId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// Create a connection pool instead of a single connection
const pool = mysql.createPool({
  host: 
  user: 
  password: 
  database: 
  port: 3306,
  flags: "-4",
});

router.post("/getImgListVIT", async (req, res) => {
  const { module, subject_category, search_keyword } = req.body;

  let query = "SELECT * FROM question";

  const queryParams = [];
  const queryConditions = [];

  if (module) {
    queryConditions.push("Module = ?");
    queryParams.push(module);
  }

  if (subject_category) {
    queryConditions.push("Subject = ?");
    queryParams.push(subject_category);
  }

  if (search_keyword) {
    queryConditions.push("Question_text LIKE ?");
    queryParams.push("%" + search_keyword + "%");
  }
  if (queryConditions.length > 0) {
    query += " WHERE " + queryConditions.join(" AND ");
  }

  pool.query(query, queryParams, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

module.exports = router;

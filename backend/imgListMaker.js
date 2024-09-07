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

router.post("/getImgList", async (req, res) => {
  const { year, subject, topic, section } = req.body;

  let query = "SELECT * FROM CBSEQB";

  const queryParams = [];
  const queryConditions = [];

  if (year) {
    queryConditions.push("year = ?");
    queryParams.push(year);
  }

  if (subject) {
    queryConditions.push("subject = ?");
    queryParams.push(subject);
  }

  if (topic) {
    queryConditions.push("topic = ?");
    queryParams.push(topic);
  }

  if (section) {
    queryConditions.push("section = ?");
    queryParams.push(section);
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

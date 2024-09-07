const express = require("express");
const router = express.Router();

router.post("/getImg", async (req, res) => {
  const { imageUrl } = req.body;

  try {
    const response = await fetch(imageUrl);
    const contentType = response.headers.get("content-type");
    const imageData = await response.arrayBuffer();

    res.set("Content-Type", contentType);
    res.send(Buffer.from(imageData)); // Convert ArrayBuffer to Buffer before sending
  } catch (error) {
    res.status(500).send("Error fetching image");
  }
});

module.exports = router;

const cors = require("cors");

const express = require("express");
const app = express();

//CORS
app.use(cors());

//middleware for json data
app.use(express.json());
// Img List for CBSE question Bank
app.use("/api", require("./imgListMaker"));
// Img List for VIT question Bank
app.use("/api", require("./imgListMakerVIT"));
// To get each image for pdf
app.use("/api", require("./imgGetter"));
// To contact admins
app.use("/api", require("./contact"));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js
require("dotenv").config(); // ✅ Load env variables
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

const artistRoute = require("./routes/artistRoutes.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use("/api/artists", artistRoute);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

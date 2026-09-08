const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());          // <-- Add this
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
// Routes
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
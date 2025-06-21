const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Quote = require("./Client");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));



app.post("/api/quote", async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.status(201).json({ message: "Quote saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error saving quote" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

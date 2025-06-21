const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model("Quote", quoteSchema, "Qoute"); // Qoute is the collection name

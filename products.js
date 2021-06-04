const { request } = require("express");
const { Model } = require("mongoose");

const mongoose = request("mongoose");
const ProductSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});
module.exports = mongoose.model("product",ProductSchema);

const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
app.use(express.json());

const ProductSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }
 

 
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/products", (req, res) => {
  const { title } = req.query;
  Product.find({})
    .exec()
    .then((productsArr) => {
      if (title) {
        const productsfiltered = productsArr.filter((product) =>
          product.title.includes(title)
        );
        if (productsfiltered.length != 0) {
          res.send(productsfiltered);
        } else {
          res.send("Not found");
        }
      } else {
        res.send(productsArr);
      }
    });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      res.status(500);
      res.send(error.message);
    });
});

app.post("/products", (req, res) => {
  Product.insertMany({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
  }).then(() => {
    res.send("The product is added");
  });
});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    // const options = { new: false};
    const resulte = await Product.findByIdAndUpdate(id, updates);
    res.send("The product has been updated");
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        message: "The product has been deleted",
      });
    })
    .catch((error) => {
      res.status(400);
      res.send(error.message);
    });
});

mongoose
  .connect("mongodb://localhost/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected");
    app.listen(7090);
  });

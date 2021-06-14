const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const joi = require("joi");
const fs = require("fs");
const { date } = require("joi");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.static("client/build"));

const ProductSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

let validProduct = (_bodyData) => {
  const joiSchema = joi.object({
    title: joi.string().min(2).max(99).required(),
    price: joi.number().min(2).max(30000).required(),
    description: joi.string().min(2).max(999).required(),
    category: joi.string().min(2).max(99).required(),
    image: joi.string().min(2).max(3000).required(),
  });
  return joiSchema.validate(_bodyData);
};

const Product = mongoose.model("Product", ProductSchema);

// app.post("/admin", (req, res) => {
//   const { username, password } = req.body;
//   if (
//     username === process.env.DB_USERNAME &&
//     password === process.env.DB_PASSWORD
//   ) {
//     res.send({});
//   } else {
//     res.send("The username or password is incorrect");
//   }
// });

app.get("/api/products", (req, res) => {
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

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   pass: String,
//   role: {
//     type: String,
//     default: "regular",
//   },
//   data_created: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// const Users = mongoose.model("Users", userSchema);

// let validUser = (_bodyData) => {
//   const joiSchema = joi.object({
//     name: joi.string().min(2).max(99).required(),
//     email: joi.number().min(2).max(30000).required().email(),
//     pass: joi.string().min(2).max(100).required(),
//   });
//   return joiSchema.validate(_bodyData);
// };

// app.get("/api/", (req, res) => {
//   res.json({ msg: "users work" });
// });

app.post("/api/products", async (req, res) => {
  // let validBody = validUser(req.body);
  //  if (validBody.error) {
  //   return res.status(400).json(validBody.error.details);
  //  }

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

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      res.status(400);
      res.send(error.message);
    });
});

app.post("/api/products", async (req, res) => {
  let validBody = validProduct(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

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

app.put("/api/products/:id", async (req, res) => {
  let validBody = validProduct(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const id = req.params.id;
    const updates = req.body;
    //const options = { new: false};
    const resulte = await Product.findByIdAndUpdate(id, updates);
    res.send("The product has been updated");
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/api/products/:id", (req, res) => {
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

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 7090);
  });

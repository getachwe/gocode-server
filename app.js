// const express=require('express');
// const app = express();
// const mongoose = require("mongoose");


// app.use(express.json());
// app.get("/products", (req, res) => {
//   const { title } = req.query;


//   // fs.readFile("products.json", "utf8", (err, products) => {
//   //   const productsArr = JSON.parse(products);
//     if (title) {
//       const productsfiltered = productsArr.filter((product) =>
//         product.title.includes(title)
//       );
//       res.send(productsfiltered ? productsfiltered : "NO found for your query");
//     } else {
//       res.send(productsArr);
//     }
  
// });
// app.get("/products/:id", (req, res) => {
//   fs.readFile("products.json", "utf8", (err, products) => {
//     const productsArr = JSON.parse(products);
//     const product = productsArr.find((item) => item.id === +req.params.id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404);
//       res.send();
//     }
//   });
// });
// app.post("/products", (req, res) => {
//   fs.readFile("products.json", "utf8", (err, products) => {
//     const productsArr = JSON.parse(products);
//     console.log(req.body);
//     productsArr.push({
//       id: productsArr.length + 1,
//       title: req.body.title,
//       price: req.body.price,
//       description: req.body.description,
//       category: req.body.category,
//       image: req.body.image,
//     });
//     fs.writeFile("products.json", JSON.stringify(productsArr), (err) => {
//       console.log(err);
//       res.send("success");
//     });
//   });
// });
// app.put("/products/:id", (req, res) => {
//   fs.readFile("products.json", "utf8", (err, products) => {
//     const productsArr = JSON.parse(products);
//     const { title, image, category, description, price } = req.body;
//     const { id } = req.params;
//     const updatedProductsArr = productsArr.map((product) => {
//       if (product.id === +id) {
//         return {
//           ...product,
//           title: title || title.products,
//           image: image || image.products,
//           category: category || category.products,
//           description: description || description.products,
//           price: price || price.products
//         };
//       } else {
//         return product;
//       }
//     });
//     fs.writeFile("products.json", JSON.stringify(updatedProductsArr), (err) => {
//       console.log(err);
//       res.send("success");
//     });
//   });
// });
// app.delete("/products/:id", (req, res) => {
//   fs.readFile("products.json", "utf8", (err, products) => {
//     const productsArr = JSON.parse(products);
//     const updatedProductsArr = productsArr.filter(
//       (product) => product.id !== +req.params.id
//     );
//     fs.writeFile("products.json", JSON.stringify(updatedProductsArr), (err) => {
//       console.log(err);
//       res.send("successs");
//     });
//   });
// });
// app.listen(7090);

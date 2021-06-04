// const mongoose=require("mongoose")
// const product=Mongoose("product",)
// app.get("/products", (req, res) => {

//   const productSchema = mongoose.Schema({
//     {title: string, required : true} 
//    { price: string,  required : true}
//    { description: string,  required : true}
//     {category: string,  required : true}
//     {image: string,  required : true}

//   })
//   const produt=mongoose.model("produt",productSchema)

//   ptodut.insertMany([{
//     title: req.body.title,
//     price: req.body.price,
//     description: req.body.description,
//     category: req.body.category,
//     image: req.body.image,

//   },
// ]).then((product)=>{



    // const { json } = require("express");
    // const express = require("express");
    // const fs = require("fs");
    // const app = express();
    // app.use(express.json());
    
    // const mongoose=require("mongoose")
    // // app.get("/products", (req, res) => {
    
    //   const productSchema = mongoose.Schema({
    //     title: string,
    //     price: string,
    //     description: string,
    //     category: string,
    //     image: string,
    
    //   })
    //   const Produt=mongoose.model("produt",productSchema)
    
    
    
    // app.get("/products", (req, res) => {
    //   const { title} = req.query;
     
    //   // fs.readFile("products.json", "utf8", (err, products) => {
    //   //   const productsArr = JSON.parse(products);
    //   produt.find({}).exec().then((productsArr)=>{
    //     if (title) {
    //       const productsfiltered = productsArr.filter((product) =>
    //        product.title.includes(title)
    //        );
    //       res.send(productsfiltered ? productsfiltered : "NO found for your query");
    //     } else {
    //       res.send(productsArr);
    //     }
    //   });
    
    //   })
       
    // // });
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
    //   // fs.readFile("products.json", "utf8", (err, products) => {
    //   //   const productsArr = JSON.parse(products);
    //   Product.insertMany([{
    //     id: productsArr.length + 1,
    //     title: req.body.title,
    //     price: req.body.price,
    //     description: req.body.description,
    //     category: req.body.category,
    //     image: req.body.image,
    
    //   }]).then((productsArr)=>{
    //     res.send("success");
    
    //   })
    //     // console.log(req.body);
    //     // productsArr.push({
    //     //   id: productsArr.length + 1,
    //     //   title: req.body.title,
    //     //   price: req.body.price,
    //     //   description: req.body.description,
    //     //   category: req.body.category,
    //     //   image: req.body.image,
    //     // });
    //     // fs.writeFile("products.json", JSON.stringify(productsArr), (err) => {
    //     //   console.log(err);
         
    //    // });


    //    ///////////////////////////////////////////////////////////////////////////////////////////////




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
    //           title : title||title.products,
    //           image : image || image.products,
    //           category : category || category.products,
    //           description : description || description.products,
    //           price : price||price.products,
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
    // mongoose.connect= 'mongodb://localhost/my_database',{
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true
    // }
    // .then(()=>{
    //   app.listen(7090);
    // })


//1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// const { json } = require("express");
// const express = require("express");
// const mongoose = require("mongoose");
// const Product = require("ProductSchema");
// const fs = require("fs");
// const app = express();
// app.use(express.json());
// const ProductSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   title: { type: string, required: true },
//   price: { type: string, required: true },
//   description: { tyep: string, required: true },
//   category: { tyep: string, required: true },
//   image: { tyep: string, required: true },
// });

// const Product = mongoose.model("Product", ProductSchema);

// app.get("/products", (req, res) => {
//   const { title } = req.query;

//   // fs.readFile("products.json", "utf8", (err, products) => {
//   //   const productsArr = JSON.parse(products);
//   Product.find({}).exec().then(productsArr =>{

//   if (title) {
//     const productsfiltered = productsArr.filter((product) =>
//       product.title.includes(title)
//     );
//     res.send(productsfiltered ? productsfiltered : "NO found for your query");
//   } else {
//     res.send(productsArr);
//   }
//   });

// });
// app.get("/products/:id", (req, res) => {
//   // fs.readFile("products.json", "utf8", (err, products) => {
//   //   const productsArr = JSON.parse(products);
//     const product = productsArr.find((item) => item.id === +req.params.id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404);
//       res.send();
//     }
//   });
// // });
// app.post("/products", (req, res) => {
//   // fs.readFile("products.json", "utf8", (err, products) => {
//   //   const productsArr = JSON.parse(products);
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
// // });
// app.put("/products/:id", (req, res) => {
//   // fs.readFile("products.json", "utf8", (err, products) => {
//   //   const productsArr = JSON.parse(products);
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
//           price: price || price.products,
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
// // });
// app.delete("/products/:id", (req, res) => {
//   // fs.readFile("products.json", "utf8", (err, products) => {
//   //   const productsArr = JSON.parse(products);
//     const updatedProductsArr = productsArr.filter(
//       (product) => product.id !== +req.params.id
//     );
//     fs.writeFile("products.json", JSON.stringify(updatedProductsArr), (err) => {
//       console.log(err);
//       res.send("successs");
//     });
//   });
// // });
// mongoose
//   .connect("mongodb://localhost/my_database", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("connected");
//     app.listen(7090);
//   });


    
    
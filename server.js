require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

//Routes Imports
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/error');

//Environment Imports
const uri = process.env.MONGO_URL;

//Startiung App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Node App Running");
    });
  })
  .catch((error) => {
    console.log(error);
  });

//routes

app.use('/api/product_api', productRoute);



app.get("/", (req, res) => {
  res.send("Hello World");
});



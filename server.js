require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')

//Startiung App
const app = express();

//Routes Imports
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/error');

//Environment Imports
const uri = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
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



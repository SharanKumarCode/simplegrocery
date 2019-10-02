const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.catch((err)=>{
    console.log("Error occured in connecting to MongoDB");
    console.log(err);
})

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established");
})

const productRouter = require("../backend/routes/productRoutes");

app.use('/product',productRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
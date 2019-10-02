const router = require('express')();
let Product = require('../models/product.model');
const dataArr = require('../../src/data/data');

const newProduct = {
    productDetails: {
        category: "Vegetables",
        productName: "Tomato",
        productImg: "https://images-na.ssl-images-amazon.com/images/I/81avkS31xRL._SL1500_.jpg",
        price: 23,
        productColor: "#f52525"
    }
}

router.get("/addProduct",(req,res,next)=> {
    let productArr = dataArr.map((data)=>{
        delete data.id;
        return {
            productDetails: data
        }
    });
    for(let i = 0; i < productArr.length; i++){
        let product = new Product(productArr[i]);
        console.log("request received...");
        product.save()
        .then(()=>console.log(`Product ${i} added`))
        .catch((err)=>console.log(`error occured ${err}`))
    }

    res.json("all products added");
})

router.get("/getProducts",(req,res,next)=>{
    console.log("request made...");
    Product.find()
    .then((data)=>{res.json(data.length)})
    .catch((err)=>{res.json(err)})
})

module.exports = router;
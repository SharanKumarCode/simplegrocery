let category = "Fruits";

let productNames = [
    "Apples",
    "Banana",
    "Papaya",
    "Orange",
    "Mango",
    "Watermelon",
    "Grapes",
    "Pomogranate"
];

let prices = [140,40,30,60,50,73,115,120];

let images = [
"https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SL1500_.jpg",
"https://sofabfood.com/wp-content/uploads/2015/11/papaya-1024x683.jpg",
"https://previews.123rf.com/images/atoss/atoss1501/atoss150100034/35300340-orange-fruit-sliced-isolated-on-white-background.jpg",
"https://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-sri-lanka-fruits-yellow-mango-fresh-food-in-dubai-and-abu-dhabi-1129587179560_480x480.jpg?v=1536789602",
"https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._SX425_.jpg",
"https://stylesatlife.com/wp-content/uploads/2018/03/black-grapes-benefits.jpg",
"https://i5.walmartimages.ca/images/Enlarge/-31/271/999999-31271.jpg"

];

let colors = [
"#fc1612",
"#f8fc12",
"#f5a614",
"#f5770a",
"#fab00f",
"#13f038",
"#7d0cf5",
"#fa073c"

]

let dataFruitsArr = [];

for(let i = 0; i < productNames.length; i++){
    dataFruitsArr.push({
category: category,
productName: productNames[i],
price: prices[i],
image: images[i],
color: colors[i],
id: 0
})
};

module.exports = dataFruitsArr;
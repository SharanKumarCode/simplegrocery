let category = "Masalas";

let productNames = [
    "Cumin",
    "Mustard",
    "Tamarind",
    "Dhania",
    "Black Pepper",
    "Fenugreek",
    "Red Chilli Powder",
    "Cardamom"
];

let prices = [60,100,60,70,200,70,50,30];

let images = [
"https://5.imimg.com/data5/AP/RS/MY-10613027/cumin-seeds-500x500.jpg",
"https://5.imimg.com/data5/JI/UF/MY-54869207/mustard-seed-500x500.jpg",
"https://cdn.shopify.com/s/files/1/1143/3886/products/tamarind_31d92032-ec18-483b-8b64-b7e890064f60_1024x1024.jpg?v=1522430515",
"https://www.easy2shop.co.in/wp-content/uploads/2018/03/Coriander-Seeds-Gota-Dhania-.jpg",
"https://5.imimg.com/data5/EI/YU/MY-34002573/black-pepper-seed-500x500.jpg",
"https://rukminim1.flixcart.com/image/832/832/jf9zxjk0/spice-masala/h/5/k/400-methi-dana-trigonella-foenum-graecum-fenugreek-seeds-box-original-imaf3s3bf6czxczw.jpeg?q=70",
"https://i0.wp.com/rusticana.com.au/wp-content/uploads/2016/11/Chilli-Powder.jpg?fit=800%2C800",
"https://stylesatlife.com/wp-content/uploads/2018/05/cardamom-benefits.jpg"

];

let colors = [
"#9e9899",
"#737373",
"#b04f21",
"#7d6b6b",
"#736868",
"#b56e10",
"#de0f04",
"#02a33a"

]

let dataMaslasArr = [];

for(let i = 0; i < productNames.length; i++){
    dataMaslasArr.push({
category: category,
productName: productNames[i],
price: prices[i],
image: images[i],
color: colors[i],
id: 0
})
};

module.exports = dataMaslasArr;
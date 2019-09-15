let category = "FoodGrains";

let productNames = [
    "Rice",
    "Wheat",
    "Ragi",
    "Toor Dal",
    "Channa Dal",
    "Urad Dal",
    "Moong Dal"
];

let prices = [50,30,40,98,105,100,113];

let images = [
"https://s3.envato.com/files/261186325/23300.jpg",
"https://5.imimg.com/data5/LG/GQ/MY-25226992/wheat-grains-500x500.jpg",
"https://5.imimg.com/data5/JG/YD/MY-42365003/organic-ragi-500x500.jpg",
"http://www.grocyhub.com/image/cache/catalog/indian_grocery/dals_pulses/arhar_dal/gh-arhar-dal-toor-dal-500gm_1-800x800.jpg",
"https://5.imimg.com/data5/TX/YJ/MY-27379132/fresh-chana-dal-500x500.jpeg",
"http://www.grocarry.com/wp-content/uploads/2018/09/107-urad-dal-whole.jpg",
"https://images-na.ssl-images-amazon.com/images/I/815iKsO9D7L._SX679_.jpg"

];

let colors = [
"#f5f5f5",
"#8B4513",
"#850437",
"#f5f51d",
"#f5c938",
"#e3e2de",
"#bbc400"
]

let dataFoodGrainsArr = [];

for(let i = 0; i < productNames.length; i++){
dataFoodGrainsArr.push({
category: category,
productName: productNames[i],
price: prices[i],
image: images[i],
color: colors[i],
id: 0
})
};

export default dataFoodGrainsArr;
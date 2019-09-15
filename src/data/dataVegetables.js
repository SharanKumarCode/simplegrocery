let category = "Vegetables";

let productNames = [
        "Tomato",
        "Potato",
        "Onion",
        "Cucumber",
        "Pumpkin",
        "Cabbage",
        "Beans",
        "Brinjal",
        "Drumstick",
        "Spinach"
    ];
    
let prices = [23,45,15,60,70,10,65,55,5,40];

let images = [
"https://images-na.ssl-images-amazon.com/images/I/81avkS31xRL._SL1500_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81TJK4QAa2L._SL1500_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81UeYuulNjL._SY355_.jpg",
"https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283006/cucumber-slices.jpg",
"https://images-na.ssl-images-amazon.com/images/I/41xN2ZhuLeL._SX425_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71nFvA-EOeL._SL1500_.jpg",
"https://4.imimg.com/data4/RY/PP/MY-10716442/fresh-green-beans-500x500.jpg",
"https://4.imimg.com/data4/RR/RR/GLADMIN-/wp-content-uploads-2016-04-brinjal-long-violet-500x500-400x400-500x500.jpg",
"https://www.barodabazaar.com/image/cache/catalog/Fresh%20vegetable%20/DRUMSTICK2-800x800.jpg",
"https://5.imimg.com/data5/PI/KX/MY-46595757/fresh-spinach-28palak-29-281kg-29-500x500.png"

];

let colors = [
"#f52525",
"#fc851c",
"#f00abe",
"#4ec20c",
"#ffba24",
"#ddfcbd",
"#049136",
"#d219f7",
"#19f79e",
"#036940"
]

let dataVegetablesArr = [];

for(let i = 0; i < productNames.length; i++){
    dataVegetablesArr.push({
    category: category,
    productName: productNames[i],
    price: prices[i],
    image: images[i],
    color: colors[i],
    id: 0
    })
};

export default dataVegetablesArr;
let category = "DryFruits";

let productNames = [
    "Cashew",
    "Almonds",
    "Fig",
    "Raisins",
    "Pista",
    "Sunflower Seeds"
];

let prices = [1040,700,800,200,550,600];

let images = [
"https://previews.123rf.com/images/kolesnikovserg/kolesnikovserg1801/kolesnikovserg180100666/93816511-cashew-nuts-isolated-on-white-background-top-view-flat-lay.jpg",
"http://cdn.shopify.com/s/files/1/1191/0846/products/ALMONDS_Circle_1200x1200.png?v=1567544728",
"https://5.imimg.com/data5/MB/PO/MY-12919036/capture-500x500.png",
"https://target.scene7.com/is/image/Target/GUEST_ce284dda-09fd-4ab6-a6e2-3ed0ff500a90?wid=488&hei=488&fmt=pjpeg",
"https://5.imimg.com/data5/LA/VT/MY-40946920/plain-pista-500x500.jpg",
"https://5.imimg.com/data5/EV/GR/MY-3966004/sunflower-seeds-500x500.jpg"
];

let colors = [
"#fcfcf7",
"#db4f0d",
"#633a3a",
"#80532a",
"#758f22",
"#898a88"
]

let dataDryFruitsArr = [];

for(let i = 0; i < productNames.length; i++){
dataDryFruitsArr.push({
category: category,
productName: productNames[i],
price: prices[i],
image: images[i],
color: colors[i],
id: 0
})
};

module.exports = dataDryFruitsArr;
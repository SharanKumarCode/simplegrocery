const dataVegetablesArr = require('./dataVegetables');
const dataDryFruitsArr = require('./dataDryFruits');
const dataFoodGrainsArr = require('./dataFoodGrains');
const dataFruitsArr = require('./dataFruits');
const dataMasalasArr = require('./dataMasalas');

let constedDatas =[dataVegetablesArr, dataDryFruitsArr, dataFoodGrainsArr, dataFruitsArr, dataMasalasArr];
let dataArr = [];
let idCount = 0;

for(let i = 0; i < constedDatas.length; i++){
    for(let j = 0; j < constedDatas[i].length; j++){
        constedDatas[i][j].id = idCount ++;
        dataArr.push(constedDatas[i][j]);
    }
}

module.exports = dataArr;
import dataVegetablesArr from './dataVegetables';
import dataDryFruitsArr from './dataDryFruits';
import dataFoodGrainsArr from'./dataFoodGrains';
import dataFruitsArr from './dataFruits';
import dataMasalasArr from './dataMasalas';

console.log(dataVegetablesArr);

let importedDatas =[dataVegetablesArr, dataDryFruitsArr, dataFoodGrainsArr, dataFruitsArr, dataMasalasArr];
let dataArr = [];
let idCount = 0;

for(let i = 0; i < importedDatas.length; i++){
    for(let j = 0; j < importedDatas[i].length; j++){
        importedDatas[i][j].id = idCount ++;
        dataArr.push(importedDatas[i][j]);
    }
}

export default dataArr;
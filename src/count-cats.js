const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((accumulator, currentValue)=>{
  
    /* return accumulator += currentValue.reduce((acc,cur)=>{
        if(cur === '^^'){
          return acc+=1;
        }
     }, 0); */
    let count = 0;
    for(let i =0; i<currentValue.length; i++){
      if(currentValue[i]==='^^'){
     count++
     }
    }
    return accumulator+=count;
 }, 0);
 }
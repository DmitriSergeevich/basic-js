const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {  
  calculateDepth(arr) {
    let calc =1;    
    if(arr.filter(elem => Array.isArray(elem)).length !== 0){      
      calc +=this.calculateDepth([].concat(...arr.filter(elem => elem.constructor.name === "Array")));
     } 
     return calc;
  };
};

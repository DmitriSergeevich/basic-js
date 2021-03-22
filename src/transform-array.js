const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) { 
 if(!Array.isArray(arr)){
  throw new Error();
  }
  let newArr =[];
  let i=0;
  while(i<arr.length){    
    switch(arr[i]){
      case '--discard-next':        
          i+=2 ;
      break;
      case '--discard-prev':
        if(arr[i-2] !== "--discard-next"){
          newArr.pop(); 
          i++;
        }else{
          i++;
        }
      break;
      case '--double-next':
        if(i!==arr.length-1){        
          newArr.push(arr[i+1])
          newArr.push(arr[i+1])
          i+=2
        }else{
          i++
        }
      break;
      case '--double-prev':
        if(i!==0  && arr[i-2] !== "--discard-next"){
          newArr.push(arr[i-1])
          i++
        }else{
          i++
        }
      break;
      default: 
        newArr.push(arr[i])       
        i++
      break;
    }
  }
  return newArr;
};

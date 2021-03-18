const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const a = Math.log(2)/5730;
module.exports = function dateSample(sampleActivity) {
  console.log(sampleActivity)
  if(typeof sampleActivity === "string" && Math.sign(sampleActivity)===1 && sampleActivity<=15 ){
  	let b = Math.log(MODERN_ACTIVITY/Number(sampleActivity));
  	return Math.ceil(b/a);
  }else{
  
  return false;
  }
  
} 

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes  || 1;
  const separator = options.separator || '+';
  let addition = options.addition || '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  if(typeof options.addition !== 'string' && options.addition ==! undefined ){
     addition = String(addition);
  }else if(options.addition === false){
    addition= "false"
  }else if(options.addition === null){
    addition= "null"
  }
  if(typeof str !== 'string'){
    str = String(str);
  }
  let arr = [];
  let repeatArr = [];
  for(let i=0; i<additionRepeatTimes; i++){
    arr.push(addition)
  }
  let repeatString = str + arr.join(additionSeparator);
  for(let i=0; i<repeatTimes; i++){
    repeatArr.push(repeatString)
  }
  let finishString = repeatArr.join(separator)
  return finishString;
};
  
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = { turns: 0, seconds: 0 }
   answer.turns=(Math.pow(2 ,disksNumber)-1);
   answer.seconds=Math.floor((Math.pow(2 ,disksNumber)-1) / (turnsSpeed/3600));
  return answer;
};
  

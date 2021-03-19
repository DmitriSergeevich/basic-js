const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if(!Array.isArray(members)){
    return false;
  }
  const arr = members.filter(count => typeof count==='string');  
  let a = arr.reduce(
    (acc,count)=>{
      for(let i =0; i<count.length;i++){
        if(count[i]!== ' '){
          return acc+=count[i];
        };
      };      
       
    },''
  );return a.toUpperCase().split('').sort().join('');
}

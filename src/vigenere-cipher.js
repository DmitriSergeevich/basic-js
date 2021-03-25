const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode=true){
    this.mode=mode;
  }
  encrypt(str, key){
    const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      let codedletters = [];
      if(str=== undefined || key=== undefined){
      throw new Error('Хуле бля');
      }
      let uppedStr = str.toUpperCase();
      let uppedKey = key.toUpperCase();
      let j =0;
      for(let i=0; i<uppedStr.length; i++){
        if(uppedStr[i].charCodeAt()>64 && uppedStr[i].charCodeAt()<91){
          codedletters.push(findeLetter(uppedStr[i]))
          j===uppedKey.length-1 ? j=0 : j+=1
        }else{
          codedletters.push(uppedStr[i])
        }
  }
  function findeLetter(letter){
    return  alfabet[((letter.charCodeAt()-65)+(uppedKey[j].charCodeAt()-65))%26]
  }
  return this.mode ? codedletters.join('').toUpperCase() : codedletters.reverse().join('').toUpperCase();
  }  
    decrypt(str, key){
      const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let codedletters = [];
        if(str=== undefined || key=== undefined){
        throw new Error('Хуле бля');
        }
        let uppedStr = str.toUpperCase();
        let uppedKey = key.toUpperCase();
        let j =0;
        for(let i=0; i<uppedStr.length; i++){
          if(uppedStr[i].charCodeAt()>64 && uppedStr[i].charCodeAt()<91){
            codedletters.push(findeLetter(uppedStr[i]))
            j===uppedKey.length-1 ? j=0 : j+=1
          }else{
            codedletters.push(uppedStr[i])
          }
    }
    function findeLetter(letter){
      return  alfabet[(((letter.charCodeAt()-64)+26)-(uppedKey[j].charCodeAt()-64))%26]
    }
    
    return this.mode ? codedletters.join('').toUpperCase() : codedletters.reverse().join('').toUpperCase();
    
    }
}

module.exports = VigenereCipheringMachine;

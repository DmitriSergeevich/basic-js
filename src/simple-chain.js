const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;    
  },
  addLink(value) {
    
    if (value===undefined){
      value = ' ';
      }
      this.chain.push(`( ${value} )`)
    
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position>this.chain.length || position<1){
      this.chain =[];
      throw new Error();
    }else{
      this.chain.splice(position-1, 1)
    }    
    return this;
  },
  reverseChain() {
    let newChain =[];
    for(let i=this.chain.length-1; i>=0; i--){
      newChain.push(this.chain[i])
    };
    this.chain=newChain;
    return this;
  },
  finishChain() {
    let returnedChain = this.chain.join('~~');
    this.chain= [];
    return returnedChain;
    
  }
};

module.exports = chainMaker;

// 6 kyu
// Bit Counting

function countBits (n){
    let binaryRep = n.toString(2)
    let binaryArray = binaryRep.toString(2)
    let sum = binaryArray.reduce((a,b)=>a+b,0)
    return sum
  };
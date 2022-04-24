function countBits(n) {
    let binaryRep = n.toString(2)
    console.log(binaryRep)
    let binaryArray = binaryRep.split('').map(Number)
    
    console.log(binaryArray)

    return binaryArray.reduce((a,b)=>a+b,0)
  
  
  };
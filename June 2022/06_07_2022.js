function longestConsec(strarr, k) {
    // your code
    let holderArray = []
    let finalArray = [' ']
  //loop for while strarr.length>k
  for(let i=0;strarr.length>k;i++){
//loop through array
let concatArray = []
for (let j=0;j<k;j++){
    concatArray.push(strarr[j])
    //concat first k elements
  //push to holder array 
}
  holderArray[i]=concatArray.join('')
  //shift strarr
  strarr.shift()
  //break
  //let final array =[' ']
  
  //loop through holder
  //if holder[i].length > final[0].length
  
  //return pop
  }
  //loop through holder
  for (let l=0;l<holderArray.length;l++){
      if (holderArray[l].length>finalArray[0].length){
          finalArray[0]=holderArray[l]
      }
  }
  //if holder[i].length > final[0].length
  return finalArray
  
}


String.prototype.toJadenCase = function () {
  
};
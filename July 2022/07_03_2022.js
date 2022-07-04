//split words apart into array
// loop through array
//goodone
function high(x){
    let stringArray = x.toLowerCase().split(' ')
    let value=0
    let index=0
    for (let i=0;i<stringArray.length;i++){
      let smallArray = stringArray[i].split('')
      let tempValue = 0
        for (let j=0;j<smallArray.length;j++){
        tempValue+=(smallArray[j].codePointAt(0))-96
      }
      if (tempValue>value){
        value=tempValue
        index=i
      }
    }
    
    return stringArray[index]
  }
  high('man i need a taxi up to ubud')
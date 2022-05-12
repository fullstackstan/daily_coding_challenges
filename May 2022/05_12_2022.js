function digitize(n) {
    //turn number into string .toString
    let numberString = n.toString()
    //string to array
    let numberArray = numberString.split('')  
    for (let i=0;i<numberArray.length;i++){
        numberArray[i]= Number(numberArray[i])
    }
    console.log(numberArray) 
    //reverse array
    return numberArray.reverse()
    //return array
  }
  digitize(35231)
 
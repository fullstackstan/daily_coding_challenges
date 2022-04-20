//7kyu Higest and Lowest

function highAndLow(numbers){
    // ...turn the string into an array
    let numberArray = numbers.split(' ')
    console.log(numberArray)
    //sort the array.
    numberArray.sort((a,b)=>a-b)
    console.log(numberArray)
    //assign the shift and pop
    let highest = numberArray.slice(-1)
    let lowest = numberArray.slice(0,1)
    console.log(highest)
    console.log(typeof(highest))
    return highest + ' ' + lowest
  
    //join the strings
    // return the join
  }
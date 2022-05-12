function solution (roman) {
    //take in string and split to array
    let romanArray = roman.split('')
    //set map with roman numeral values
    let romanMap = new Map()
    romanMap.set('I',1)
    romanMap.set('V',5)
    romanMap.set('X',10)
    romanMap.set('L',50)
    romanMap.set('C',100)
    romanMap.set('D',500)
    romanMap.set('M',1000)
    //create array of values 
    let valueArray = []
    let finalArray = []
    for (let i=0;i<romanArray.length;i++){
        valueArray[i]=romanMap.get(romanArray[i])
    }
    console.log(valueArray)
    //iterate through
  
    for(let j=0;j<valueArray.length;j++)
    //if (arr[i] <arr[i+1]){finalArray.push((arr[i+1]-arr[i]))}
    if (valueArray[j] < valueArray[j+1]){
        finalArray.push((valueArray[j+1]-valueArray[j]))
        j++
    } else {
        finalArray.push(valueArray[j])
    }
    console.log(finalArray)
    // complete the solution by transforming the 
    // string roman numeral into an integer
      return finalArray.reduce((a,b)=>a+b)
  }

  solution("MCMXC")

  [1000, 100, 1000, 10, 100]
  //iterate through
  //if (arr[i] <arr[i+1]){finalArray.push((arr[i+1]-arr[i]))}


  ////////////
  //bedtime 5kyu 5 kyu
//Directions Reduction
function dirReduc(arr){
    // ...
  } 
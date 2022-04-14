// 6 kyu
// Find the odd int

function findOdd(incomingArray) {
    let returnNumber
    let numberMap = new Map()
    for (let element of incomingArray){
        if (numberMap.has(element)){
            numberMap.set(element, (numberMap.get(element))+1);  
          }else numberMap.set(element, 1)
    }
/*
    console.log(numberMap)
    console.log(Math.max(...numberMap.values()))
    console.log([...numberMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a))
    console.log(numberMap.entries())
*/
    numberMap.forEach( (value, key, map) => {
        if(!(value%2==0)){
        returnNumber = key
        
    }
    });
    return returnNumber
    
  }

  findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])
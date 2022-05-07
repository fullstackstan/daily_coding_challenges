// 7 kyu
// Don't give me five!

// function dontGiveMeFive(start, end)
// {
//     let numberHolderArray = []
//   //count the number from start to end
//   for (start;start<=end;start++){
//       console.log(start)
//       let number = start
// //as we count we turn the number into a string
//     let numberString = String(number)
//     console.log(numberString)
//   //sp[lit the string into array
//   let numberArray = numberString.split('')
    
//   //check each digit for +5
//   if(!(numberArray.includes(5))){
//     numberHolderArray.push(start)
//   }
//   //if 5 then dont push number to Number array
//   //return array length
//   }
  
//     return numberHolderArray.length-1;
// }

// dontGiveMeFive(1,9)

// 1st try7 fail


// function dontGiveMeFive(start, end)
// {
//     let firstNum=start
//     let lastNum=end
//     let numberHolderArray = []
//     //place start to end in array
//     for(let i=0;firstNum<=end;i++){
//         numberHolderArray[i]=firstNum
//         firstNum++
//     }
//     console.log(numberHolderArray)
//     //iterate through array and if %5!=0, push to new array
//     let finalHolderArray = numberHolderArray.filter(function (number){
//        return number%5!==0
//     })
//     console.log(finalHolderArray)
//     //return new array lenghh
//   return finalHolderArray.length;
// }
dontGiveMeFive(1,9)


// second try  NOPE!!


function dontGiveMeFive(start,end){
    let firstNum=start
    let lastNum=end
    let numberHolderArray = []
    let finalArray = []
    //place start to end in array
    for(let i=0;firstNum<=end;i++){
        numberHolderArray[i]=firstNum
        firstNum++
    }
    console.log(numberHolderArray)
    //itereate through array
    outer: for (let i=0;i<numberHolderArray.length;i++){
        //element to string
        let numberString = String(numberHolderArray[i])
    //loop through string 
    for (let j=0;j<numberString.length;j++){
        if(numberString.codePointAt(j)==53){
            continue outer
        }

    }
    //if codepoint m,atchs, continue
    finalArray.push(numberHolderArray[i])
    }
    return finalArray.length
}

dontGiveMeFive(1,9)
//6 kyu
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

let testArray = [3,3,3,5,6,4,6,7,4,6,]

function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0,3)
    let exchange = numbers.slice(3,6)
    let lineNumber = numbers.slice(-4)
    let phoneNumber = [].concat('(',areaCode,') ',exchange,'-',lineNumber)
    let stringNumber=phoneNumber.join('')
    return stringNumber
  }



//   //5kyu!
//   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// // Examples
// // pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// // pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//     // convert to array
//     let strArray = str.split(' ')
//     let finalString=''
//     for (let element of strArray){
//         console.log(element[0])
//         let elementToArray = element.split('')
//         console.log(elementToArray)
//          if (elementToArray.length>1){
//              let firstLetter = elementToArray.shift()
//              elementToArray.push(firstLetter,'ay ')
//              finalString+=elementToArray.join('')
//              console.log(finalString)
//          }console.log(elementToArray)
//     }return finalString
    //iterate over array
    // // shift and push 
    
    // }
    // pigIt('Pig latin is cool')
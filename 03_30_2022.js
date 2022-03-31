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


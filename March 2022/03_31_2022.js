// My second attempt at a 5kyu
//i wrote the psuedo code on paper

// (word,words)

// sort word
// get element from Array
//     sort element
//     compare sorted word to sorted element
//     if match, add orig.Array.element to new Array
// // return new Array
// 5 kyu
// Where my anagrams at?

function anagrams(word, words) {
//sort word
    let newArray = []
    let wordArray = word.split('')
    wordArray.sort()
    console.log(wordArray)
//get element from array
    let wordsCopy = words.slice()
    let count = -1
    for (let element of wordsCopy){
        let elementToArray = element.split('')
        elementToArray.sort()
        console.log(elementToArray)
        count++
        if (wordArray.toString()==elementToArray.toString()){
            newArray.push(words[count])
        }
    }console.log(newArray)
    return newArray
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

////////////////////////////////////////////////

// 5 kyu
// String incrementer
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (string) {
    // return incrementedString
//convertstring to array 
let stringToArray = string.split('')
console.log(stringToArray[stringToArray.length-1])
//check end of array
let numberArray = []
while (true){
    if (parseInt(stringToArray[stringToArray.length-1])>=0&&parseInt(stringToArray[stringToArray.length-1])<=9){
    console.log(stringToArray)
    numberArray.push(stringToArray.pop())
    console.log(numberArray)
}else break
} let number = parseInt(numberArray.toString())
number++
let stringNumber = number.toString()

stringNumber = stringNumber.padStart(numberArray.length,0)
let finalNumberArray = stringNumber.split('')

let finalArray = stringToArray.concat(finalNumberArray)
console.log(finalArray)
return finalArray
}
// 
incrementString("foobar000")
// 
// 
// 
// 
// 


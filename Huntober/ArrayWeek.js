// Day 1
function checkEquality(arr1,arr2){
    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr1[i].length;j++){
            if (arr1[i][j]!==arr2[i][j]){
                return false
            }
        }
    }
    return true
}

// each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

checkEquality(arr1, arr2) 
checkEquality(arr1, arr3) 
checkEquality(arr1, arr4) 
// etc.

// ?? Day2
 function moveLeft(arr,elem){
    if (arr[0]===elem){return arr}
    let elemIndex = arr.indexOf(elem)
    arr.splice(elemIndex-1,0,elem)
    arr.splice(elemIndex+1,1)
    return arr
 }
 function moveRight(arr, elem){
    if (arr[arr.length-1]===elem){return arr}
    let elemIndex = arr.indexOf(elem)
    arr.splice(elemIndex+2,0,elem)
    arr.splice(elemIndex,1)
    return arr
 }

let myArray = ['abc', 'xyz', 1, 2, 'Hey!']
moveRight(myArray,'xyz')
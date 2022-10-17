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


//Day 3

function moveThingsAround (arr){
    let finalArray = []
    // looparray
    // chekc 
    for (let i=0;i<arr.length;i++){
        if (!~arr[i].indexOf('a')&&arr[i].length<4){
            finalArray.push(arr[i])
            arr.splice(i,1)
            i--
        }
    }
    // loop array
    // check elem length and not a
    for (let i=0;i<arr.length;i++){
        if (arr[i].length>3&&!~arr[i].indexOf('a')){
            finalArray.push(arr[i])
            arr.splice(i,1)
            i--
        }
    }
    // loop backward
    // unshift
    for(let i=arr.length;i>0;i--){
        finalArray.unshift(arr[i-1])
    }
    return finalArray
}
let myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

moveThingsAround(myArr)

// Day 4

function moveUp(arr,elem){
    let elemIndex = []
    // find index of elem
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++){
            if (arr[i][j]===elem){
                elemIndex[0]=i
                elemIndex[1]=j
            }
        }
    }
    if (elemIndex[0]===0){
        return arr
    }
    let tempElem = arr[elemIndex[0]-1][elemIndex[1]]
    arr[elemIndex[0]-1][elemIndex[1]]=elem
    arr[elemIndex[0]][elemIndex[1]]=tempElem
    return arr
}
function moveDown(arr,elem){
    let elemIndex = []
    // find index of elem
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++){
            if (arr[i][j]===elem){
                elemIndex[0]=i
                elemIndex[1]=j
            }
        }
    }
    if (elemIndex[0]===arr[0].length-1){
        return arr
    }
}

let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

moveDown(myGrid,'h')
// moveUp(moveUp([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']],'h'),'h')

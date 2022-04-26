function persistence(num) {
//split numtostring to array
let numArray = num.toString().split('')
console.log(numArray)
//multiply the elements
let result = numArray.reduce((a,b)=>a*b,1)
console.log(/result)
//if result>9, repeat
}

persistence(39)
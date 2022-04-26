function persistence(num) {
//split numtostring to array
let numArray = []
let result
let counter = 0
do {
    numArray = num.toString().split('')
    num = numArray.reduce((a,b)=>a*b,1)
    counter++
} while (num>9);

console.log(num)
return counter
//multiply the elements


}

persistence(39)
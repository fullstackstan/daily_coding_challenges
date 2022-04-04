//first attempt

// function isPangram(string){
//    let arrayfromString = string.split('')

// let charPoint = 98

//     for (let i=1;i<26;i++){
//     let comparisonLetter = String.fromCodePoint(charPoint).toLowerCase()
//     charPoint++
//     if(!(arrayfromString.includes(comparisonLetter))&&i==arrayfromString.length){
//         return false
//     }
//     }return true

// }


function isPangram(string){
   let arrayfromString = string.split('')
   let lowerCaseArray = arrayfromString.forEach(element => {element.toLowerCase})
   for (let i=1;i<26;i++){
       if(lowerCaseArray.indexOf(String.fromCodePoint(97+i))==-1){
           return false
       }
   }return true
  }
// // //6 kyu
// // Take a Ten Minutes Walk

// //accept array
// //get each element 
// function isValidWalk(walk) {
//     if (walk.length!=10){
//         return false
//     }
//     let northSouth = 0, eastWest = 0
//     walk.forEach(element => {
//         switch (element){
//             case 'n':
//                 northSouth++
//                 break
//             case 's':  
//                 northSouth--
//                 break
//             case 'e':
//                 eastWest++
//                 break
//             case 'w':
//                 eastWest--
              
//         }
//     });
//     if (northSouth ==0&& eastWest=0){
//         return true
//     } return false
// }


/* my 5kyu attemt
find the index of the second '.' if two '.' or first period if '/' and '.'
get the string before that 
*/
function domainName(url){
    let indexOfFirstPeriodFound = url.indexOf('.')
    console.log(indexOfFirstPeriodFound)
    let secondPunctuation = url.lastIndexOf('.',indexOfFirstPeriodFound-1)
    console.log(secondPunctuation)
  }
  
  domainName("http://google.com")
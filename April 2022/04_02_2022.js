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
    let mySubString,firstPunctuation, secondPunctuation
    if (url.includes('https://www')){
         firstPunctuation = url.indexOf('.',13)
         secondPunctuation = url.lastIndexOf('w.',firstPunctuation)
         mySubString = url.substring(secondPunctuation+2,firstPunctuation)
         console.log(mySubString)
    }else
    if (url.includes('http://www')){
        firstPunctuation = url.indexOf('.',13)
         secondPunctuation = url.lastIndexOf('w.',firstPunctuation)
         mySubString = url.substring(secondPunctuation+2,firstPunctuation)
         console.log(mySubString)
    }else
    if (url.includes('https://')){
        firstPunctuation = url.indexOf('.')
         secondPunctuation = url.lastIndexOf('/',firstPunctuation-1)
         mySubString = url.substring(secondPunctuation+1,firstPunctuation)
    }else
    if (url.includes('http://')){
         firstPunctuation = url.indexOf('.')
         secondPunctuation = url.lastIndexOf('/',firstPunctuation-1)
         mySubString = url.substring(secondPunctuation+1,firstPunctuation)
    }else
    if (url.includes('www')){
        firstPunctuation = url.indexOf('.',5)
         secondPunctuation = url.lastIndexOf('w.',firstPunctuation)
         mySubString = url.substring(secondPunctuation+2,firstPunctuation)
         console.log(mySubString)
    } else{
        firstPunctuation = url.indexOf('.')
        mySubString = url.substring(0,firstPunctuation)
        console.log(mySubString)
    }
    return mySubString
  }
  
  domainName("google.com")

  /* this kata was on my mind all day and ifinally solved it
  */
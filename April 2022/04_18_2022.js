// 7 kyu
// Two to One

// function longest(s1, s2) {
//     let newString = s1+s2
//     let sortSet = new Set(newString)
    
//     console.log(sortSet)
//     let setArray = sortSet.values()
//     console.log(setArray)
//     setArray.sort((a, b) => a - b)
//     console.log(setArray)
//    // let sortedString = sortSet.values().sort((a,b)=>a-b).join('')
//   }



function longest(s1,s2){
    let fullString = s1+s2
    let stringArray = fullString.split('')
    let holderArray = []
    for(let element of stringArray){
        if (!(holderArray.includes(element))){
            holderArray.push(element)
        }
    } 
    let finalString = holderArray.sort().join('')
    return finalString
}
  longest("loopingisfunbutdangerous", "lessdangerousthancoding")
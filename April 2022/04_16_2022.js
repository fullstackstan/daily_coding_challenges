// 6 kyu
// Counting Duplicates

function duplicateCount(text){
    let counter=0
    let stringMap = new Map()
    let stringArray = text.split('')
    for (let element of stringArray){
        if(stringMap.has(element.toLowerCase())){
            stringMap.set(element.toLowerCase(),(stringMap.get(element.toLowerCase())+1))
        }else {
            stringMap.set(element.toLowerCase(),1)
        }
    }console.log(stringMap)
    let mapArray = stringMap.entries()
    for (let element of stringMap.values()){
        if(element>1){    
        counter++
        }
    } 
       
    return counter

  }

  duplicateCount("aaAAAAAAAbbcde")
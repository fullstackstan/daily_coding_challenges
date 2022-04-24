function duplicateEncode(word){
    let wordArray = word.toLowerCase().split('')
    console.log(wordArray)
    // split lowercased string into array
  // iterate through array and count with map
    let wordMap = new Map()
    for (let i=0;i<wordArray.length;i++){
        if(!(wordMap.has(wordArray[i]))){
            wordMap.set(wordArray[i], 1)
        } else {
            wordMap.set(wordArray[i],(wordMap.get(wordArray[i])+1))
        }
    }
    console.log(wordMap)
  //if map value>1 then push ), else push (,
  let encodeArray=[]
  for (let j=0;j<wordArray.length;j++){
    if(wordMap.get(wordArray[j])>1){
        encodeArray.push(')')
    }else {
        encodeArray.push('(')
    }
  }
  console.log(encodeArray)
  return encodeArray.join('')
}

duplicateEncode("Success")

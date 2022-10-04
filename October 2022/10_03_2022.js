function revrot(str, sz) {
    // your code
//   split sting to array
  let strArray = str.split('')
  let finalArray = []
//   loop
  while (strArray.length>sz){
//   splice off chunk
    let chunk = strArray.splice(0,sz)
//   verify chunk length
    if (chunk.length<sz){break}
//   sum up the cubues of the difits ofthe chunk
    let sum=0
    for (let i=0;i<chunk.length;i++){
      sum+=chunk[i]**3
    }
//   if %2 ===0 reverse
    if (sum%2===0){
      let reversedChunk = chunk.reverse()
      finalArray.push(reversedChunk.join(''))
    } else {
      chunk.push(chunk[0])
      chunk.shift()
      finalArray.push(chunk.join(''))
    }
//   else rotate
//   push chunk to final arrayto final
    }
//   return join of array
  let finalString =  finalArray.join('')
}
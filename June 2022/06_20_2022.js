function revrot(str, sz) {
    //     // your code
    //   string to array
    let strArray = str.split('')
    let finalArray = []
    //   loop
    while (strArray){
 //   chunk from array
        let chunk = strArray.splice(0,sz)
    //   validate chunk
    if (chunk.length<sz){break}
    //   process chunk
    let sum = 0
    //loop through and cube and sum chunk
    for (let i=0;i<chunk.length;i++){
        sum += (chunk[i]*chunk[i]*chunk[i])
    }
    if (sum%2==0){
        chunk.reverse()
    } else {
        chunk[sz]=chunk[0]
        chunk.shift()
    }
    //   join chunk 

    //   push chunk
    finalArray.push(chunk.join(''))
    //   end loop
    }
   
    //   return final string
    return finalArray.join('')
    }
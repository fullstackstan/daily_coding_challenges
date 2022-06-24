function revrot(str, sz) {
    // string to array
    let finalArray = []
    let stringArray = str.split('')
    while (stringArray.length>0){ 
    // break of chuck of string
    let chunk = stringArray.splice(0,sz)
    if (chunk.length<sz){break}
    // chunck falls through checks
    if(chunk.reduce((a,b)=>a+b)%2){
        chunk.reverse()
    } else {
        chunk[sz+1]=chunk[0]
        chunk.shift()
    }
    finalArray.concat(chunk.join(''))
    }
    return finalArray
    //   div by 2 check
    // final checked chunk is pushed to final
    }
function wave(str){
    let strArray = str.split('')
    //split string
    let strArrayHolder =[]
    for(let i=0;i<strArray.length;i++){
        strArray[i].toUpperCase()
        let moddedStr = strArray.join('')
        strArrayHolder[i]=moddedStr
        strArray[i].toLowerCase()
    }
    return strArrayHolder
     // iterate over string
      //i<str.length
    }
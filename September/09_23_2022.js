var encryptThis = function(text) {
    // Implement me! :)
  //   dplit dtring
    let arrayOfWords = text.split(' ')
    let splitWordArray=[]
    for (let i=0;i<arrayOfWords.length;i++){
      splitWordArray.push(arrayOfWords[i].split(''))
      let codePoint=splitWordArray[i][0].codePointAt(0)
      splitWordArray[i][0]=codePoint
      if(splitWordArray[i].length>1){
      let secondLetter = splitWordArray[i][1]
      let lastLetter = splitWordArray[i][splitWordArray[i].length-1]
      splitWordArray[i][1]=lastLetter
      splitWordArray[i][splitWordArray[i].length-1]=secondLetter
        }
      
    }
    console.log(splitWordArray)
  
    for (let i=0;i<splitWordArray.length;i++){
      splitWordArray[i]=splitWordArray[i].join('')
      console.log(splitWordArray[i])
    }
    return splitWordArray.join(' ')
  }

  switch (key) {
    case value:
        
        break;
  
    default:
        break;
  }
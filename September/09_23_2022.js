var encryptThis = function(text) {
    // Implement me! :)
  //   dplit dtring
    let arrayOfWords = text.split(' ')
    let splitWordArray=[]
    for (let i=0;i<arrayOfWords.length;i++){
      splitWordArray.push(arrayOfWords[i].split(''))
      splitWordArray[i][0]=splitWordArray[i][0].codePointAt[0]
      let secondLetter = splitWordArray[i][1]
      let lastLetter = splitWordArray[i][splitWordArray[i].length-1]
      splitWordArray[i][1]=lastLetter
      splitWordArray[i][splitWordArray[i].length-1]=secondLetter
      
    }
    console.log(splitWordArray)
  //   split words
  }
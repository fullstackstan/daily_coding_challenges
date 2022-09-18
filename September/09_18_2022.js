function stringsInMaxDepth(s) {
    // Good luck
  //   count the number of left parents by looping through 
  //   as you count++ count --
  //   get highest number
    let stringArray = s.split('')
    if (!stringArray.includes('(')){
      return [s]
    }
    let parenCount =0
    let highParenCount = 0
    
    //get high paren count
    for (let i=0;i<stringArray.length;i++){
      if (stringArray[i]==='('){
        parenCount++
        if (parenCount>highParenCount){
          highParenCount++
        }
      } if (stringArray[i]===')'){
        parenCount--
      }
      
    }
    //!get high paren
    
    //loop through array
    let holderArray = []
    parenCount = 0
  //   ??if paren count == high paren count, then start slice at that paren index+1 to indexof ) and push to holder array
    for (let i=0;i<stringArray.length;i++){
      if (stringArray[i]==='('){
        parenCount++
        }
      if (stringArray[i]===')'){
        parenCount--
      }    
      if (parenCount == highParenCount){
        let tempHold = stringArray.slice(i+1,stringArray.indexOf(')',i))
        holderArray.push(tempHold.join(''))
        i+=holderArray[holderArray.length-1].length
      }
    }
  //   create array of indexs of high parents
  //   cut slices from string to index of
  //   set next start using indexof
    return holderArray
  }
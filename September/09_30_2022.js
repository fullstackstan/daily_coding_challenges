function validParentheses(parens) {
    //  split string
      let parenArray = parens.split('')
      let parenCounter =0
    //  loop through array
      for (let char of parenArray){
        switch (char){
            case '(':
            parenCounter++
            break
            case ')':
            parenCounter--
            break
        }
        if (parenCounter===-1){return false}
      }
      if(!parenCounter){return true}
      return false
    //  parencounter++ or--
    //   return paren counter
    }
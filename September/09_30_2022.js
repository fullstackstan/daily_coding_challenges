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

    function validBraces(braces){
        // split string
          let braceArray = braces.split('')
        // paren curly bracket
          let paren=0, curly =0, bracket = 0
        // loop through string
          for (let i=0;i<braceArray.length;i++){
            switch (braceArray[i]){
                case '(':
                if(braceArray[i+1]==='}'||braceArray[i+1]===']'){return false}
                paren++
                break
                case '{':
                if(braceArray[i+1]===')'||braceArray[i+1]===']'){return false}
                curly++
                break
                case '[':
                if(braceArray[i+1]==='}'||braceArray[i+1]===')'){return false}
                bracket++
                break
                case ')':
                paren--
                break
                case '}':
                curly--
                break
                case ']':
                bracket--
                break
                
            }
            if (paren===-1||curly===-1||bracket===-1){return false}
          }
          if (!paren&&!curly&&!bracket){return true}
          return false
        // switch
        //   if any counter -1 return false
        }
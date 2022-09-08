function toCamelCase(str){
    // vstring to array
      let strArray = str.split('')
    // loop through array 
      for (let i=0; i<strArray.length;i++){
        if (strArray[i]==='-'||strArray[i]==='_'){
          strArray[i+1]=strArray[i+1].toUpperCase()
          strArray.splice(i,1)
          }
    //     } else if (strArray[i]==='_'){
    //       strArray.splice(i,1)
    //     }
      }
      return strArray.join('')
    // if i = '-', splice i and toUpperCase  next i
    }
    // incoming string
    // return camelCased string
    // examples 
    
    
    
    // string to array
    // loop through array 
    // if i = '-', splice i and toUpperCase  next i
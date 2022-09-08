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


    //second one


    function isPangram(string){
      // string to uppercase
      let upperStringArray = string.toUpperCase().split('')
    // // split string into array
    // loop trhough codepoints
      for (let i=65 ; i < 65+26 ; i++){
        if (!upperStringArray.includes(String.fromCodePoint(i))){
          return false
        }
      }
      return true
    // if !strArray.includes(string.fromcodepoint)
    // return false
    // if 
    //   return true
    }
    
    // incoming string
    // return is boolean
    // string to uppercase
    // // split string into array
    // loop trhough codepoints
    // if !strArray.includes(string.fromcodepoint)
    // return false
    // if 
    //   return true
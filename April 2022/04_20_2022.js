function spinWords(string){
    //split string into array
      let stringArray = string.split(' ')
      console.log(stringArray)
      for (let i=0;i<stringArray.length;i++){
          console.log(stringArray[i])
          if(stringArray[i].length>4){
              let wordArray=stringArray[i].split('')
              wordArray.reverse()
              console.log(wordArray)
              stringArray[i]=wordArray.join('')
          }
          
      }
      //check word lenghth
      //assign and replace first and last
      //turn array back into string
      return stringArray.join(' ')
    }
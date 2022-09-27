function whitespaceNumber(n) {
     
    //   get sign of number
    //   convert number to binary
      let hArray = []
      if (n<0){n=Math.abs(n)
      hArray.push('\t')
               } else if (n>0){hArray.push(' ')}
      let binaryRep = n.toString(2)
      console.log(binaryRep.toString())
    //   convert binary to whitespace
    //   string to array
      let binArray = binaryRep.split('')
    //   loop through array
    //   push conversion to holderArray
      
      
     
    //   then loop through
      console.log(binArray)
      for (let i=0;i<binArray.length;i++){
        console.log(binArray[i])
        switch (binArray[i]){
            case '0': hArray.push(' ') 
            break
            case '1': hArray.push('\t')
            break
        }
      }
      hArray.push('\n')
      return hArray.join('')
      
      }
      
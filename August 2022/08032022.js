function isAValidMessage(message){
    // split message nito array
      let arrayMessage = message.split('')
    // loop throlugh array 
      for (let i=0;i<arrayMessage.length;i++){
        if(arrayMessage[i]?.codePointAt(0)>=48&&arrayMessage[i]?.codePointAt(0)<=57&&(arrayMessage[i+1]?.codePointAt(0)<=48||arrayMessage[i+1]?.codePointAt(0)>=57)){
         // if i is number, insert space after
          arrayMessage.splice(i+1,0,' ')
        }
      }
      console.log(arrayMessage)
    arrayMessage = arrayMessage.join('')
      console.log(arrayMessage)
    // rejoin array
    // split array on space
    // loop through
    // compare i to i+1.length
    // return
    
    }
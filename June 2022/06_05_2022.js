function find_average(array) {
    if (array.length==0){return 0}
    let avg =0
    let sum=array.reduce((a,b)=>a+b,0)
    avg=sum/array.length
    return avg
  }

  function removeExclamationMarks(s) {
    let array = []
    for (let i = 0;i<s.length;i++){
      if(s.codePointAt(i)!=33){
        array.push(s[i])
      }
    }
    return array.join('')
  }

  function rot13(message){
      let holderArray=[]
      for(let i=0;i<message.length;i++){
          if ((message.codePointAt(i)>=97&&message.codePointAt(i)<=109)||(message.codePointAt(i)>=65&&message.codePointAt(i)<=77)){
              holderArray.push(String.fromCodePoint(message.codePointAt(i)+13))
          } else if ((message.codePointAt(i)>=110&&message.codePointAt(i)<=122)||(message.codePointAt(i)>=78&&message.codePointAt(i)<=90)){
            holderArray.push(String.fromCodePoint(message.codePointAt(i)-13))
          } else {
              holderArray.push(message[i])
          }
      }
      return holderArray.join('')
  }
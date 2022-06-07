var uniqueInOrder=function(iterable){
    //create empty array
    let holderArray = []
    //let  lastLetter = ''
    let lastLetter=''
    //loop through
    for (let i =0;i<iterable.length;i++){
        if(iterable[i]!=lastLetter){
            holderArray.push(iterable[i])
            lastLetter=iterable[i]
        }
    }
    return holderArray
    //if element is != lastLetter
    //push element onto empty arry
    //return array
    //your code here - remember iterable can be a string or an array
  }
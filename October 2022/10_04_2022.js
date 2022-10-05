function solution(str){
    //   let final array
      let finalArray = []
    //   str to array 
      let strArray = str.split('')
    //   loop through arry
      while (true){
        let chunk = strArray.splice(0,2)
        if(chunk.length===0){break}
        if (chunk.length<2){
          chunk.push('_')
          finalArray.push(chunk.join(''))
          break
        } else { 
          finalArray.push(chunk.join(''))
        }
      }
      return finalArray
    //   let chunk = splice 0,2
    //   if chunk.leng<2 ammend [1] break loop 
    //   else push
    //   return array
    }
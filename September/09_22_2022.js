function dataReverse(data) {
    console.log(data.length)
      let segArray = []
      for (let i=0;i<data.length;i+=8){
        segArray.push(data.slice(i,i+8))
      }
      let finalArray = []
      let reversed = segArray.reverse()
      for (let i=0;i<segArray.length;i++){
        for (let j=0;j<segArray[i].length;j++){
          finalArray.push(reversed[i][j])
        }
      }
      return (finalArray)
    }
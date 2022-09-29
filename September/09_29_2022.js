function sortArray(array) {
    //   loop through array
      let indexArray = []
      let oddArray = []
      for (let i=0;i<array.length;i++){
        if (array[i]%2!==0){
          indexArray.push(i)
          oddArray.push(array[i])
        }
      }
    //  get index of odds and push odds to a seperate array
    //  sort sep array
      let sortedOddArray = oddArray.sort((a,b)=>a-b)
      console.log(sortedOddArray)
    //  splice out old and in sorted odds to recorded indexes
      for (let i =0;i<oddArray.length;i++){
        array.splice(indexArray[i],1,sortedOddArray[i])
      }
      return array
      }
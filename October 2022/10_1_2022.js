multiplicationTable = function(size) {
    // insert code here
    let array = new Array(size)
    // insert code here
  //   create array with new array size
    
    console.log(array)
    
    for (let i=0;i<size;i++){
      array[i]= new Array(size).fill(null)
      for (let j=0;j<size;j++){
        array[i][j]=j+1
              array[i][j]*=i+1
  
      }
    }
    return array
  }
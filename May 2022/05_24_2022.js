function twoSum(numbersArray, target) {
    // loop through array
    for (let i=0;i<numbersArray.length;i++){
        for (let j=numbersArray.length;j>0;j--){
            if (numbersArray[i]+numbersArray[j]==target){
                return [i,j]
            }
        }
    }
    //double loop through array
    //if i+j == target
    //return [i,j]
  }


  function boolToWord( bool ){
    return bool == true ? "Yes" : 'No';
  }

  
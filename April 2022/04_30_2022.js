function tribonacci(signatureArray,n){
    for (let i=3;i<n;i++){
        signatureArray[i]=(signatureArray[i-1]+signatureArray[i-2]+signatureArray[i-3])
    }
    console.log(signatureArray)
    signatureArray.length = n
    return signatureArray
  }
  tribonacci([1,2,3],10)
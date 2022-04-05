function findEvenIndex(arr){
    let leftArray, rightArray,leftSum, rightSum
    for (let i=0;i<arr.length;i++){
        leftArray = arr.slice(0,i-1)
        console.log(leftArray)
        rightArray= arr.slice(i+1)
        leftSum = leftArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue);
            console.log(leftSum)

        rightSum = rightArray.reduce(
                (previousValue, currentValue) => previousValue + currentValue);
                console.log(rightSum)

        if(leftSum==rightSum){
            return i
        }
    }return -1
  }
  findEvenIndex([1,2,3,4,3,2,1])
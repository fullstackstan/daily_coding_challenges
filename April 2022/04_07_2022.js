// 6 kyu
// Playing with digits

function digPow(n, p){
    //split apart numbers
    let numberArray = n.toString().split('')
    console.log(numberArray)
    //mulitply number and put into array
    let multiplyArray=[]                
    for (let i =0;i<numberArray.length;i++){
        multiplyArray.push(numberArray[i]**(p+i))
        console.log(multiplyArray)
    }
    let arraySum=multiplyArray.reduce((a,b)=>a+b)
    console.log(arraySum)
    let compareSum = 0
    for (let k=1;compareSum<=arraySum;k++){
        if (compareSum==arraySum){
            return k-1
        }
        compareSum=n*k
    } return -1
    
  }

  digPow(89444, 1)
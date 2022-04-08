// 6 kyu
// A Rule of Divisibility by 13

function thirt(n) {

    function getSum(incomingNumber){
    let reversedArray = incomingNumber.toString().split('').reverse()
    console.log(reversedArray)
    for (let i=0;i<reversedArray.length;i++){
        reversedArray[i]=(reversedArray[i]*((10**i)%13))
    }
    console.log(reversedArray)
    let sum=reversedArray.reduce((a,b)=>a+b)
    return sum
}

    let firstSum=getSum(n)
    let secondSum=getSum(firstSum)
    console.log(firstSum)
    console.log(secondSum)
    while (true){
        if (firstSum!==secondSum){
            firstSum=secondSum
            secondSum=getSum(firstSum)
        } break
    } return secondSum
    
}

thirt(8529)
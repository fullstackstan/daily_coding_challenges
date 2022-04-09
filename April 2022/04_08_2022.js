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

//////////////////////


// 6 kyu
// Build Tower

function towerBuilder(nFloors) {
    let starArray=[]
    for (let i=0;i<(((nFloors-1)*2)+1);i++){
        starArray.push('*')
        }
        starArray.push('\n')
        let workingArray=[]
        for (let j=0;j<nFloors;j++){
        workingArray[j]=starArray.slice()
        console.log(starArray)
        console.log(workingArray)
        }
    }
  

  towerBuilder(6)

  ///i give up.  the family awaits.
  function towerBuilder(nFloors) {
    let tower = [];
    
    for (let i = 0; i < nFloors; i++) {
      tower.push( ' '.repeat(nFloors-i-1) + '*'.repeat(i*2+1) + ' '.repeat(nFloors-i-1) );
    }
    
    return tower;
  }
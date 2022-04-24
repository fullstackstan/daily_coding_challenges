// 6kyu Counting Bits
function countBits(n) {
    let binaryRep = n.toString(2)
    console.log(binaryRep)
    let binaryArray = binaryRep.split('').map(Number)
    
    console.log(binaryArray)

    return binaryArray.reduce((a,b)=>a+b,0)
  
  
  };


//   

function findOutlier(integers){
    let binaryArray=[]
    let zeros = 0
    let ones = 0
    for (let i=0;i<integers.length;i++){
        if(integers[i]<0){
            binaryArray[i]=(integers[i]%2)*(-1)
        } else {
        binaryArray[i]=integers[i]%2
        }
        console.log(binaryArray[i])
        if(binaryArray[i]==0){zeros++}
        if(binaryArray[i]==1){ones++}
    }
    console.log(zeros,ones)
    if(zeros>ones){
        return integers[binaryArray.indexOf(1)]
    } else{
        return integers[binaryArray.indexOf(0)]
    }
}

findOutlier([160, 3, 1719, 19, 11, 13, -21])
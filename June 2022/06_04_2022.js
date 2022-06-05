function isOddHeavy(n){
    // odd arraY
    // even array
    let oddArray = []
    let evenArray = []
    // push them
    for (let i=0;i<n.length;i++){
        if(n[i]%2==0){
            evenArray.push(n[i])
        } else {oddArray.push(n[i])}
    }
    let sortedEven = evenArray.sort((a,b)=>a-b)
    let sortedOdd = oddArray.sort((a,b)=>a-b)
    // sort them
    if(sortedEven.length==0&&sortedOdd.length!=0){return true}
    if (sortedOdd[0]>sortedEven[sortedEven.length-1]){
        return true
    } return false
    // if lowest odd > highest even 
    // retyrn tru
    // else false
    // return boolean
  }
  isOddHeavy([1,-2,-1,2])
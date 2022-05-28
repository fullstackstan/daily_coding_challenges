var isSquare = function(n){
    let answer = Math.sqrt(n)
    if (Number.isInteger(answer)){
      return true
    }return false
   
  }

  /////////

//   7 kyu
// Exes and Ohs
  function XO(str) {
    //create x and o variable counters
      let exes = 0
      let ohs = 0
      //loop through string
      for (let i = 0 ;i < str.length;i++){
        //two if statements
        if (str[i].toLowerCase()=='x'){exes++}
        if (str[i].toLowerCase()=='o'){ohs++}
      }
      
      //final x == o if stament 
      if (exes==ohs){
        return true
      }
      //return
      return false
    }



    ///////////////

//     7 kyu
// Beginner Series #3 Sum of Numbers


// 8 kyu
// Sum of positive
function positiveSum(arr) {
    //holder array
    let holderArray =[]
    //loop through arr
    for (let i = 0 ; i< arr.length ; i++ ){
        //check for negatives
      if (arr[i]>0){
         //push non negatives
        holderArray.push(arr[i])
      }
   
    //reduce new array
     
    }
   return holderArray.reduce((a,b)=>a+b,0)
    
  }



  ////////

  function sumMix(x){
    //map elements with Number() to new array
      let newArray = x.map(x => Number(x))
      //return reduce
      return newArray.reduce((a,b)=>a+b,0)
    }


    // function expandedForm(num) {
    //     //number to string and split. 
    //       let numberStringArray = num.toString().split('')
    //       //walk backward and mulitply 
    //       let zerocounter = 0
    //       let holderArray = []
    //       for (let i=numberStringArray.length ;i>0 ;i--){
    //         //for each element , take element and append a zero string
           
    //         holderArray.push(numberStringArray[i])
    //         if (zerocounter>0){holderArray.push('0'.repeat(zerocounter))}
    //         holderArray.push(' + ')

    //         zerocounter++
    //       }
    //       console.log(holderArray.join('+'))
    //     }

    //     expandedForm(22)


    function expandedForm(num){
        //split the number
        let numberArray = num.toString().split('')
        let finalArray =[]
        let zerocounter = 0
        //walk backward
        if (numberArray.length==1){finalArray.push(numberArray[0])}
        for (let i = numberArray.length ; i>1; i--){
            //unshift first number
            if (numberArray[i]==0){

            }else if (zerocounter==0){
                finalArray.unshift(numberArray[i-1])
                zerocounter++
            }
            if (zerocounter>0){
                finalArray.unshift((numberArray[i-2])+'0'.repeat(zerocounter))
                zerocounter++
            }
        }
        let lastArray = []
        for (let i=0;i<finalArray.length;i++){
            if(Number(finalArray[i])==0){

            }else {lastArray.push(finalArray[i])}
        }
        
        return lastArray.join(' + ')
    }

    expandedForm(2992)
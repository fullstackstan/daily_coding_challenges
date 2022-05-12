function digitize(n) {
    //turn number into string .toString
    let numberString = n.toString()
    //string to array
    let numberArray = numberString.split('')  
    for (let i=0;i<numberArray.length;i++){
        numberArray[i]= Number(numberArray[i])
    }
    console.log(numberArray) 
    //reverse array
    return numberArray.reverse()
    //return array
  }
  digitize(35231)
 

  //////

//   8 kyu
// Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    //finds the average
    let sum = s1+s2+s3
    let average = sum/3
    
    if (average>=90){
        return 'A'
    } else if (average>=80&&average<90){
        return 'B'
    } else if (average>=70&&average<80){
        return 'C'
    } else if (average>=60&&average<70){
        return 'D'
    } else {
        return 'F'
    }
    
}
  
//   parameters 3 inputs
//   return a letter grade
//   examples to the left
//   psuedo

/////////////

// 7 kyu
// Number-Star ladder

function pattern(n){
    let arrayHolder=[]
    //loop n number of times
    for(let i=1;i<=n;i++){
      arrayHolder.push(1)
      arrayHolder.push('*'.repeat(i-1))
      if (i>1){
        arrayHolder.push(i)
      }
      arrayHolder.push('\n')
    }
    //each loop there need n-1 number of stars
    //last digit is line number
    arrayHolder.pop()
   return arrayHolder.join('');
  }

  //////////
  function pattern(n){
 //start with for loop 
  let arrayHolder=[]
  for (let i = 1 ; i<n ; i++){
     //loop n number of times
  //if n%2==0
    if (i%2==0){
      arrayHolder.push(i.toString().repeat(i))
    }
    console.log(arrayHolder)
  //repeat the i , i times
  //insert \n
  //pop last element in array
  }
 
 }
// pattern(5)7 kyu
// Complete The Pattern #5 - Even Ladder

  function pattern(n){
    //start with for loop 
     let arrayHolder=[]
     for (let i = 1 ; i<n ; i++){
        //loop n number of times
     //if n%2==0
       if (i%2==0){
         arrayHolder.push(i.toString().repeat(i))
         arrayHolder.push('\n')
       }
       console.log(arrayHolder)
     //repeat the i , i times
     //insert \n
     //pop last element in array
     }
    arrayHolder.pop()
    return arrayHolder.join('')
   }
   pattern(5)
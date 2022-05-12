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
    //find the letter grade
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
    //return the letter value
  }
  
  parameters 3 inputs
  return a letter grade
  examples to the left
  psuedo
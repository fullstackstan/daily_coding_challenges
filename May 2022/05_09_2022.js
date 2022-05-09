// 8 kyu
// Get the mean of an array

function getAverage(marks){
    let studentAvg = (marks.reduce((a,b)=>a+b))/marks.length
    return Math.floor(studentAvg)
}

// 7 kyu
// Disemvowel Trolls

function disemvowel(str) {
    //split apart the string to array
    let strArray = str.split('')
    let finalArray = []
    //iterate through the array
    for (let i=0;i<strArray.length;i++){
        //push array to new final array
        if(strArray[i].toLowerCase()=='a'||strArray[i].toLowerCase()=='e'||strArray[i].toLowerCase()=='i'||strArray[i].toLowerCase()=='o'||strArray[i].toLowerCase()=='u'){

        } else{
            finalArray.push(strArray[i])
        }
    // if its a vowel, dont push.
    //return joined final array
    }
    
    return finalArray.join('');
  }
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

//   //6kyu 6 kyu
// Delete occurrences of an element if it occurs more than n times
function deleteNth(arr,n){
    let numberMap = new Map();
    let finalArray = []
    //iterate through array 
    for (let i = 0;i<arr.length;i++){
        if (numberMap.has(arr[i])){
            numberMap.set(arr[i],numberMap.get(arr[i])+1)
        } else {
            numberMap.set(arr[i],1)
            console.log(numberMap)
        }
        if(numberMap.get(arr[i])<=n){
            finalArray.push(arr[i])
        }
    }

    // if map key value is <= n
    //push to final array
    return finalArray
  }
  deleteNth([20,37,20,21], 1)
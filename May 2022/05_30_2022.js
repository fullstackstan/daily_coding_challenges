<<<<<<< HEAD
function feast(beast, dish) {
    if((beast[0]==dish[0])&&(beast.charAt(beast.length-1)==dish.charAt(dish.length-1))){
      return true   
    }return false
    }
    

function queueTime(customers, n) {
    //while customers.leenght>0
    if (n>customers.length){
      n=customers.length
    }
    let totalTime =0
    for (let i=0;i<customers.length;i++){
      for (let j=0;j<n;j++){
        customers[j]=customers[j]-1
      }
      
      totalTime++
      for (let k=0;k<customers.length;k++){
        if(customers[k]==0){
          customers.splice(k,1)
          k--
        }
      }
      i--
    }
  //loop through array up until index<n-1
  //decrement each customer
  //increase total time
  //loop to splice all zero
//if spice decrement counter

return totalTime

  }
  queueTime([2,2,3,3,4,4], 2)
>>>>>>> 5550ae3c3ed3e34128f19cc7fb71a87ebe34eced
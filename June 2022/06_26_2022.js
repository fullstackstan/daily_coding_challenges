function queueTime(customers, n) {
    if (n>customers.length)n=customers.length
    let time = 0
    
    for (let i=0;customers.length;i++){
      for(let j=0;j<n;j++){
        customers[j]--
      }
      for (let k=0;k<customers.length;k++){
        if(customers[k]==0){
          customers.splice(k,1)
          k--
        }
      }
      time++
    }
    return time
    
  }
  queueTime([1,2,3,4,5], 100)
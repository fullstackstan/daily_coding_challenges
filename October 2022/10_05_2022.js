function queueTime(customers, n) {
    //TODO
  //   send cashiers home
    let counter = 0
    if (n>customers.length){n=customers.length}
    let cashiers = []
  //   load initialcashiers
    for (let i=0;i<n;i++){cashiers.push(customers.shift())}
    while (true){
      if (cashiers.length===0){break}
      for(let i=0;i<cashiers.length;i++){
        cashiers[i]--
      }
      while (cashiers.some((element)=>element===0)){
        cashiers.sort((a,b)=>a-b)
        cashiers.shift()
        if (customers.length){
          cashiers.push(customers.shift())
        }
      }
      counter++
    }
  return counter  
  }
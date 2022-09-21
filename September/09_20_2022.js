function queueTime(c, n) {
    //TODO
    //loopthru
    //while true
    let time = 0
    while (true){
      if (c.includes(0)){
        c.splice(c.IndexOf(0),1)
        continue
      }
      if (c.length===0){
        break
      }
      for (let i =0;i<n;i++){
        c[i]-=1
      }
      time++
    }
    return time
    //if customer [0]===0
    //shift customer [0]
    //continue
    //if (length 0) break
    //loop n 
  }
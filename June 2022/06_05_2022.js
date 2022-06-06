function find_average(array) {
    if (array.length==0){return 0}
    let avg =0
    let sum=array.reduce((a,b)=>a+b,0)
    avg=sum/array.length
    return avg
  }
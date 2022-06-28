function capitalize(s){
    let stringArray = s.split('')
    let stringArray2 = s.split('')
    let holder1 = []
    let holder2 =[]
    
    for (let i =0;i<stringArray.length;i++){
      if (i%2==0){
        holder1.push(stringArray[i].toUpperCase())
      } else {
        holder1.push(stringArray[i])
      }
    }
    for (let i =0;i<stringArray.length;i++){
      if (i%2!=0){
        holder2.push(stringArray[i].toUpperCase())
      } else {
        holder2.push(stringArray[i])
      }
    }
    return [holder1.join(''), holder2.join('')];
  };
function narcissistic(value) {
   let arrayValue = Array.from(String(value),Number)
   console.log(arrayValue)
   let newArray = arrayValue.map(element=>element**arrayValue.length)
   let sum = newArray.reduce((a,b)=>a+b,0)
   console.log(sum)

  }
  
  narcissistic( 371 )
  
// 6 kyu
// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    let returnArray=[]
    for (a;a<=b;a++){
       let c = a.toString().split('')
       console.log(c)
       //multiply array
       for (let i=0;i<c.length;i++){
           c[i]=c[i]**(i+1)
           console.log(c)
       }
       if (c.reduce((a,b)=>a+b)==a){
           returnArray.push(a)
           console.log('yes')
       }
    }return returnArray
  }

  sumDigPow(1, 10)
  
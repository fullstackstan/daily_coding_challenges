// 8 kyu
// Square(n) Sum

function squareSum(numbers){
    for (let i = 0;i<numbers.length;i++){
      numbers[i]*=numbers[i]
    } if(numbers.length>0){return numbers.reduce((a,b)=>a+b)
  } return 0
    }
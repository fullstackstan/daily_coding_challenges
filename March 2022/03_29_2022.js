// 7 kyu
// Categorize New Member

function openOrSenior(data){
  let newArray = []
  for (let i=0;i<data.length;i++){
    let age = data[i][0], handicap = data[i][1]
    if(age>54&&handicap>7){
      newArray.push('Senior')
    }else newArray.push('Open')
    } return newArray
  }

  // 6 kyu
  // Multiples of 3 or 5



  function solution(number){
    let sum = 0
  while (true){
    number--
    if (number<=0){
      break
    }else if (number%3==0||number%5==0){
      sum+=number
    }
  } return sum  
    
  }
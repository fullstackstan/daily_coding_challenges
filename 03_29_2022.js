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
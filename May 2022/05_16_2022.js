function opposite(number) {
    return -number}

//     8 kyu
// All Star Code Challenge #18

// 8 kyu
// All Star Code Challenge #18

function strCount(str, letter){  
  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    
    return count;
    
  }

  function points(games) {
    let points=0
  for (let gameNumber=0;gameNumber<games.length;gameNumber++){
    let x = games[gameNumber][0]
    let y = games[gameNumber][2]
    console.log(x,y)
    if(x>y){
      points+=3
    } else if (x==y){
      points++
    }
  }
    return points
  }

  points(["1:0","2:0","3:0"])


  ////////////////////

//   7 kyu
// Complementary DNA
  function DNAStrand(dna){
    let dnaArray = dna.split('')
    let finalArray =[]
    for (let i=0;i<dna.length;i++){
      if(dnaArray[i]=='A'){finalArray.push('T')}else
        if(dnaArray[i]=='T'){finalArray.push('A')}else
          if(dnaArray[i]=='C'){finalArray.push('G')}else
            if(dnaArray[i]=='G'){finalArray.push('C')}
    }
      return finalArray.join('')
    }
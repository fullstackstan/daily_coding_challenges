// 6 kyu
// Replace With Alphabet Position
function alphabetPosition(text) {
    text = text.toLowerCase()
    let numberArray = []
    console.log(text)
    for(let i=0;i<text.length;i++){
        if(text.codePointAt(i)>96&&text.codePointAt(i)<123){
            numberArray.push(text.codePointAt(i)-96)
        }
    }
    console.log(numberArray)
    return numberArray.join(' ')
    
  }
  alphabetPosition("ZZZ")


  //////////////

  function order(words){
    // split words into array
    words = words.split(' ')
    
    //split elment into array
    let wordArray = []
    let finalArray = []
    for(let i=0;i<words.length;i++){
        wordArray[i]=words[i].split('').sort()
        finalArray[wordArray[i].shift()-1]=words[i]
    }
    console.log(wordArray)
    console.log(finalArray)
    return finalArray.join(' ')
  }
  order("is2 Thi1s T4est 3a")
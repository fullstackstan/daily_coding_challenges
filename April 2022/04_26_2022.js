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
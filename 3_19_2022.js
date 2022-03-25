//8kyu Correct the mistakes of the character recognition software

function correct(string)
{
let newString =''
for (let i = 0;i<string.length;i++){
  switch (string.charAt(i)){
    case '5':
    newString += 'S'
    break
    case '0':
    newString += 'O'
    break
    case '1':
    newString += 'I'
    break
    default: 
    newString += string.charAt(i)
    
  }
} return newString;
}

//edit test



// string incrementer

function incrementString (string) {
    let numberArray=[]
    //split string
    let stringArray=string.split('')
    // check the end for a number
    if (Number.isInteger(parseInt(stringArray[stringArray.length -1]))){
//if integer, pop and unshift to new array
        while(Number.isInteger(parseInt(stringArray[stringArray.length -1]))){
            numberArray.unshift(stringArray.pop())
        }
    //join amd Number array
    let numberLength = numberArray.length
    let numberToIncrement = Number(numberArray.join(''))
    
    //increment array
    numberToIncrement++
    //convert increment to string
    let numberString = numberToIncrement.toString()
    console.log(numberString)
    numberString = numberString.padStart(numberLength,0)
    //push incremented array to old
    stringArray.push(numberString)
    //join and return
    return stringArray.join('')

//if no integer , add one and return
    } else {return string+1}
    
    
  }
incrementString('foobar000')


  let string = 'foobar000'
  let sArray = string.split('')
  let number = parseInt(sArray[-1])
  console.log(number)
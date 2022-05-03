// new strategy do 30 min codewars a day, whatever pops up.

function removeSmallest(numbers) {
    let numbersCopy = [...numbers]
    numbersCopy.sort((a,b)=>a-b)
    let lowestNumber=numbersCopy.unshift()
    numbers.splice((numbers.find(value => value==lowestNumber)),1)
    return numbers
  }
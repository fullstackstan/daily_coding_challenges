function findMissingLetter(array)
{
//   first codepoint
  let firstCodePoint = array[0].codePointAt(0)
//   loop through array 
  for (let i=1;i<array.length;i++){
    if (array[i].codePointAt(0)!==firstCodePoint+i){
      console.log(String.fromCodePoint(firstCodePoint+i))
    }
  }
//   get first codepoint`
//   check next element for each codepoint`
  return ' ';
}
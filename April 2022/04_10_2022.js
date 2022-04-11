// 6 kyu
// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    let returnArray=[]
    for (a;a<=b;a++){
       let c = a.toString().split('')
       console.log(c)
       //multiply array
       for (let i=0;i<c.length;i++){
           c[i]=c[i]**(i+1)
           console.log(c)
       }
       if (c.reduce((a,b)=>a+b)==a){
           returnArray.push(a)
           console.log('yes')
       }
    }return returnArray
  }

  sumDigPow(1, 10)
  


  ////////////////


  function to_nato(words) {

	// Go code

  let dictionary= 'Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, Xray, Yankee, Zulu'

  let dictionaryArray=dictionary.split(', ')

  let wordsArray = []

  for (let i = 0; i<words.length;i++){
      if(words.toLowerCase().codePointAt(i)>=97 && words.toLowerCase().codePointAt(i)<=122){
        wordsArray[i]=dictionaryArray[(words.toLowerCase().codePointAt(i)-97)+' ']
      }else {
          wordsArray[i]=words.charAt(i)
      }
  }return wordsArray.join('')

  }

  to_nato('If you can read')
  ////////// works but need to do formating
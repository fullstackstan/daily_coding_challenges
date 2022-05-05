// //6 kyu
// Simple Encryption #1 - Alternating Split

function encrypt(text, n) {
    //split text
    let textArray = text.split('')
      //make odd even array
      let odd = []
      let even = []
      //loop n times
      for (let i=0;i<n;i++){
        //shift odd to odd even to even
        for(let j=0;j<textArray.length;j++){
            if(j%2==0){
                even.push(textArray.shift())
            }else if(!(j%2==0)){
                odd.push(textArray.shift())
            }
        }
      //concat odd even to text
      text = odd.concat(even).join('')
      //return text
      }
      console.log(text)
      
      
    }
    encrypt("This is a test!", 0)
    function decrypt(encryptedText, n) {
    
    }
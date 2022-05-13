function past(h, m, s){
    let millisec = (h*3.6e+6)+(m*60000)+(s*1000)
    return millisec
  }

  function solution(str){
    return str.split('').reverse().join('');  
  }

// 8 kyu
// L1: Set Alarm
  function setAlarm(employed, vacation){
    if (employed==true&&vacation==false){
      return true
    } else {
      return false
    }
    }
    // 8 kyu
    // Remove First and Last Character
    function removeChar(str){
        let array = str.split('')
        array.pop()
        array.shift()
          return array.join('')
        };
        
        
        
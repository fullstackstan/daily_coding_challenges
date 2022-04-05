// 6 kyu
// Who likes it?

function likes(names) {
    if (names.length==0){
        return 'no one likes this'
    }else if(names.length==1){
        return `${names[0]} likes this`
    }else if(names.length==2){
        return `${names[0]} and ${names[1]} like this`
    }else if (names.length==3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else {
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }


//   5 kyu
// Human Readable Time

function humanReadable (seconds) {
    let hours = 0
    let minutes = 0
    let workingSeconds = seconds
    while (seconds>60){
    if (seconds>=60){
        
        minutes++
        seconds-=60
        if (minutes==60){
            hours++
            minutes=0
        }
         
    } 
}return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  humanReadable(45)
// 8 kyu
// Will there be enough space?
function enough(cap, on, wait) {
    if(on + wait <= cap){
      return 0
    }
    else{
      return wait + on - cap
    }
  }
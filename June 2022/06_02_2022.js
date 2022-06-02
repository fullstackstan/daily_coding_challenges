function bouncingBall(h,  bounce,  window) {
    let count=-1
  if (h>0&&bounce>0&&bounce<1&&window<h){
    for (count;h>window;count++){
      
      h*=bounce
      count++
    }
    return count
  }
    return -1
  }
  
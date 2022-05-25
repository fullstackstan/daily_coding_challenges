function greet (name, owner) {

    // Add code here
    
    return name==owner?'Hello boss':'Hello guest'
  }
  


  ////  tough 7
//   7 kyu
//   Is this a triangle?

  function isTriangle(a,b,c)
{
  if(a<0||b<0||c<0){return false}
  //if((b>c>a)||(a>c>b)){return true}
  if((b==c&&a<b)){
    return true
  }
   return false;
}


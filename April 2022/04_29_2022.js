// 5 kyu
// Moving Zeros To The End

function moveZeros(arr) {
   // find location of each zero
   let zeroLocation = []
   for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        zeroLocation.push(i)
    }
   }
//reverse array of zero locations
zeroLocation.reverse() 
// splice and push using reveresed array
for (let i=0;i<zeroLocation.length;i++){
    let zeroToPush = arr.splice(zeroLocation[i],1)
    arr.push(+zeroToPush)
}
return arr
    
  }
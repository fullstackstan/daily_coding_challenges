// // complete the function
// function solution(string) {
//     if(!string) return ''
      
//     // string to array
//     let arrayHolder = string.split('')
//     // if uppercase
//     for (let i=1;i<=arrayHolder.length;i++){
//         if ((String(arrayHolder[i]).codePointAt(0)>=65&&String(arrayHolder[i]).codePointAt(0)<=90)&&String(arrayHolder[i-1]).codePointAt(0)!=32){
//             arrayHolder.splice(i-1,0,' ')
//         }
//     }
//     //   if i-1 !32
//     //     insert ' '
      
//     // return array joined
//     return arrayHolder.join('')
//   }
//   solution('camelCasing')


function solution(string){
    if (string==''){return ''}
    let arrayHolder=string.split('')
    for (let i=1;i<arrayHolder.length;i++){
        let letterCode = String(arrayHolder[i]).codePointAt(0)
        if ((letterCode>=65&&letterCode<=90)&&String(arrayHolder[i-1]).codePointAt(0)!=32){
            arrayHolder.splice(i,0,' ')
        }
    }
    return arrayHolder.join('')
}
//8 kyu DNA to RNA Conversion

function DNAtoRNA(dna) {
let rna=''
for (let i=0;i<dna.length;i++){
  dna[i]=='T'?rna+='U':rna+=dna[i]
}return rna
}


//8 kyu Return Negative
function makeNegative(num) {
  if (num<0){ return num}return -num
}
//8 kyu Opposites Attract
function lovefunc(flower1, flower2){
if(flower1%2!=flower2%2){
  return true
} return false
}
//8 kyu Fake Binary
function fakeBin(x){
  let newString=""
  for (let i=0;i<x.length;i++){
  (x[i]<5) ? newString+=0:newString+=1
    
} return newString
  }
//8 kyu Even or Odd 
function even_or_odd(number) {
if (number % 2 == 0){
return "Even"
}return "Odd"
}
// 8 kyu Are You Playing Banjo? 
function areYouPlayingBanjo(name) {
  if (name.charAt(0)== "r" || name.charAt(0)=="R"){
    return name + " plays banjo"
  }
  return name + " does not play banjo";
}

// 8 kyu Multiply
function multiply(a, b){
  +a * +b
  return a*b
}

function removeKeys (str,keys){
    keys = ['A','_','K','E','Y','!']
    strArray = str.split('')
for (let i=0;i<strArray.length;i++){
    for (let j=0;j<keys.length;j++){
        if (strArray[i]===keys[j]){
            strArray[i]=""
        }
    }
}
console.log(strArray.join(''));
}

removeKeys('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
)
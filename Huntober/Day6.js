function removeDecoy(str,count){
    // str to array
    let strArray=str.split('')
    // create index array from count
    let indexArray=[]
    for (let i=0;i<strArray.length;i++){
        indexArray.push((count*i)-1)
    }
    // reverse index array
    indexArray.reverse()
    // loop through splicing from behind
    for (let i=0;i<indexArray.length;i++){
        strArray.splice(indexArray[i],1)
    }
    // return joined array
    return strArray.join('')
}

removeDecoy('sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!!',3)
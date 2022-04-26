function persistence(num) {
    let numArray = []
    let result
    let counter = 0
    if (num<=9){
        return 0
    }
    while (num>9){
        numArray = num.toString().split('')
        num = numArray.reduce((a,b)=>a*b,1)
        counter++
    }
    return counter
    //split numtostring to array

}
persistence(39)
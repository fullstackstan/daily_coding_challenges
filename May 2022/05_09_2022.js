// 8 kyu
// Get the mean of an array

function getAverage(marks){
    let studentAvg = (marks.reduce((a,b)=>a+b))/marks.length
    return Math.floor(studentAvg)
}


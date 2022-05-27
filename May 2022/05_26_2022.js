function roundToNext5(n){
    // ...
  }


  ////////////
  6 kyu
// Find the total white and black areas in a strange chessboard
// 461196% of 101167 of 447benjaminzwhite



  /**
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/
function whiteBlackAreas(cols, rows) {
  // given two array
  //return sum of white and sum of black
  let totalArea = cols.reduce((a,b)=>a+b,0)*rows.reduce((a,b)=>a+b,0)
  console.log(totalArea)
  let whiteSum = 0
  let blackSum = 0
  //loop through cs array i
  for (let columnCounter=0;columnCounter<cols.length;columnCounter++){
    for (let rowCounter=0;rowCounter<rows.length;rowCounter++){
      if (columnCounter%2==0){
        if(rowCounter%2==0){
          whiteSum += cols[columnCounter]*rows[rowCounter]
        }
       
      }
      if (columnCounter%2!=0){
        
        if(rowCounter%2!=0){
          whiteSum += rows[rowCounter]*cols[columnCounter]
        }
      }
    }
  }
  //loop through rs array j
  //if j%2==0, white squares are i%2==0, black squares are i%2!=0
  //if j%2!=0,white squares are i%2!=0, black squares are i%2==0
  return [whiteSum, totalArea-whiteSum]
}
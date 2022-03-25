// 7 kyu Sort array by string length

function sortByLength (array) {
  
    function compareNumbers(a, b) {
      return a.length - b.length;
    }
      array.sort(compareNumbers)
      return array
    };
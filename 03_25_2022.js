// 7 kyu Sort array by string length

function sortByLength (array) {
  
    function compareNumbers(a, b) {
      return a.length - b.length;
    }
      array.sort(compareNumbers)
      return array
    };

// 6kyu    How many pages in a book?

    function amountOfPages(summary){
        //take in number
        //create counter
        let counter = 0
        let numberString =''
        while (numberString.length < summary){
          ++counter
          numberString+=String(counter)
        }return counter
      }
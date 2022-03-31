// My second attempt at a 5kyu
//i wrote the psuedo code on paper

// (word,words)

// sort word
// get element from Array
//     sort element
//     compare sorted word to sorted element
//     if match, add orig.Array.element to new Array
// // return new Array
// 5 kyu
// Where my anagrams at?

function anagrams(word, words) {
//sort word
    let newArray = []
    let wordArray = word.split('')
    wordArray.sort()
    console.log(wordArray)
//get element from array
    let wordsCopy = words.slice()
    let count = -1
    for (let element of wordsCopy){
        let elementToArray = element.split('')
        elementToArray.sort()
        console.log(elementToArray)
        count++
        if (wordArray.toString()==elementToArray.toString()){
            newArray.push(words[count])
        }
    }console.log(newArray)
    return newArray
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
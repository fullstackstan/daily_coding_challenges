function removeKeys (str,keys){
    keys = [' ', 'S', 'p', 'a', 'c', 'e']
    strArray = str.split('')
for (let i=0;i<strArray.length;i++){
    for (let j=0;j<keys.length;j++){
        if (strArray[i]===keys[j]){
            strArray[i]=" "
        }
    }
}
console.log(strArray.join(''));
}

removeKeys('e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs')
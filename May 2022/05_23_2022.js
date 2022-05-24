function countSmileys(arr) {

    let counter = 0
    for (let i=0;i<arr.length;i++){
        if (arr[i].length==2){
            if((arr[i][0]==':'||arr[i][0]==';')&&(arr[i][1]=='D'||arr[i][1]==')')){
                counter++
            }
        } else if (arr[i].length==3){
            if ((arr[i][0]==':'||arr[i][0]==';')&&(arr[i][2]=='D'||arr[i][2]==')')&&(arr[i][1]=='-'||arr[i][1]=='~')){
                counter++
            }
        }
    } return counter
}

countSmileys([';]', ':[', ';*', ':$', ';-D'])
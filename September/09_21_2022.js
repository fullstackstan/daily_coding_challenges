
function meeting(s) {
    let nameArray = s.toUpperCase().split(';')
    let nameArray2 =[]
    for (let i=0;i<nameArray.length;i++){
      nameArray2[i]=nameArray[i].split(':').reverse()
    }
    for (let i=0;i<nameArray2.length;i++){
        nameArray2[i][0]=nameArray2[i][0].split('')
        nameArray2[i][0].unshift('(')
        nameArray2[i][0]=nameArray2[i][0].join('')
        console.log(nameArray2[i][0]);
        nameArray2[i][1]=nameArray2[i][1].split('')
        nameArray2[i][1].unshift(' ')
        nameArray2[i][1].push(')')
        nameArray2[i][1]=nameArray2[i][1].join('')
        console.log(nameArray2[i][1]);
        nameArray2[i]=nameArray2[i].join(',')
    }
    console.log(nameArray2.join(''));
    return nameArray2.join('')
  
}
meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")
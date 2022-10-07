function fixString(str){

    // split String
    let strArray = str.split('')
    // loop Array
    for (let i=0;i<strArray.length;i++){
        switch (strArray[i]) {
            case '1':
                strArray[i]='I'
                break;
            case 'I':
                strArray[i]='1'
                break;
            case '0':
                strArray[i]='O'
                break;
            case 'O':
                strArray[i]='0'
                break;
            case '2':
                strArray[i]='Z'
                break;
            case 'Z':
                strArray[i]='2'
                break;
            case '3':
                strArray[i]='E'
                break;
            case 'E':
                strArray[i]='3'
                break;
            case '4':
                strArray[i]='h'
                break;
            case 'h':
                strArray[i]='4'
                break;
            case '5':
                strArray[i]='S'
                break;
            case 'S':
                strArray[i]='5'
                break;
            case '6':
                strArray[i]='G'
                break;
            case 'G':
                strArray[i]='6'
                break;
            case '7':
                strArray[i]='L'
                break;
            case 'L':
                strArray[i]='7'
                break;
            case '8':
                strArray[i]='B'
                break;
            case 'B':
                strArray[i]='8'
                break;
            case '9':
                strArray[i]='q'
                break;
            case 'q':
                strArray[i]='9'
                break;
        
            default:
                break;
        }
    }
    // switch case 
return strArray.join('')

}

fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

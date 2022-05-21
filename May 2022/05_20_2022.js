function simpleMultiplication(number) {
    if (number%2==0){
      return number*8
    }return number*9
    }

    
    function finalGrade (exam, projects) {
        let finalGrade=0
        if (exam>90||projects>10){
          return 100
        } else if (exam>75&&projects>=5){
          return 90
        } else if (exam>50&&projects>=2){
          return 75
        }
        return 0
      }

      
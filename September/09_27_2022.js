function streetFighterSelection(fighters, position, moves){
    //   move around
      let charNames = []
    //   loop through moves
      for (let move of moves){
        switch (move){
            case 'left': if (position[0] === 0){
              position[0]=5
              charNames.push(fighters[position[0]][position[1]])
            } else { 
              position[0]-=1
              charNames.push(fighters[position[0]][position[1]])
            }
            break
            case 'right': if (position[0] === 5){
              position[0]=0
              charNames.push(fighters[position[0]][position[1]])
            } else { 
              position[0]+=1
              charNames.push(fighters[position[0]][position[1]])
            }
            break
            case 'up': if (position[1] === 0){
              charNames.push(fighters[position[0]][position[1]])
            } else { 
              position[1]-=1
              charNames.push(fighters[position[0]][position[1]])
            }
            break
            case 'down': if (position[1] === 1){
              charNames.push(fighters[position[0]][position[1]])
            } else { 
              position[1]+=1
              charNames.push(fighters[position[0]][position[1]])
            }
            break
        }
      }
      console.log(charNames)
      return charNames.join('')
    //   push as you move
    //   return charNames.join
      
    }
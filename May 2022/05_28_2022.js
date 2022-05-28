// function lovefunc(flower1, flower2){
//     //if flower 1 is even and flower
//     if (flower1%2==0&&flower2%2==0){return false}
//     if (flower1%2!=0&&flower2%2!=0){return false}
//     return true
//   }


//   const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(distanceToPump/mpg > fuelLeft) return false;
//     return true;
//   };

// //   7 kyu
// // Printer Errors

// function printerError(printString) {
//     //p-string
//     //r-a fraction in string form
//     //e below
    
//       //create a counter for invalid characters
//       let errorCount = 0
//       //loop through string 
//       for (let i =0;i<printString.length;i++){
//         if (printString.codePointAt(i)<97||printString.codePointAt(i)>109){
//           errorCount++
//         }
//       }
//       //use codePointAt() 97-109
//       return `${errorCount}/${printString.length}`
//     }
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

    function declareWinner(fighter1, fighter2, firstAttacker) {
  
        // Lew attacks Harry; Harry now has 3 health.
        console.log(`${fighter1.name} attacks ${fighter2.name} `)
        fighter2.health = fighter2.health-fighter1.damagePerAttack
        console.log(`${fighter2.name} now has ${fighter2.health} health`)
        
    //   Harry attacks Lew; Lew now has 6 health.
    //   Lew attacks Harry; Harry now has 1 health.
    //   Harry attacks Lew; Lew now has 2 health.
    //   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
      }
      
      declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4))

      //which attack is first and fighter stats
// return the fighter.name
//example below

//figure out who's first
//2 loops fighter 1 first 1st loop

// fighter 2 first 2nd loop
//how the loops loops looks
//fighter takes health
//check health
//other fighter takes health
// check health

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    //figure out who's first
//2 loops fighter 1 first 1st loop
    if(firstAttacker==fighter1.name){
        for(let i= 0;fighter1.health>=0||fighter2.health>=0;i++){
            fighter2.health = fighter2.health-fighter1.damagePerAttack
            if(fighter2.health<=0){return fighter1.name}
            fighter1.health = fighter1.health-fighter2.damagePerAttack
            if(fighter1.health<=0){return fighter2.name}
        }
    }
  }
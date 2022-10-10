let str = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

function puns(str){

    let punArray = str.split(',')
    let finalArray = []
    for (let i=0;i<punArray.length;i++){
        // No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
        if(punArray[i][0]===" "||punArray[i][punArray[i].length-1]===' '){continue}  
//         Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
        if (punArray[i].toLowerCase().includes('dog')||punArray[i].toLowerCase().includes('bark')||punArray[i].toLowerCase().includes('bone')){continue}
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
        if (punArray[i].length%5===0){continue}
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
        if ((punArray[i].charCodeAt(0)+punArray[i].charCodeAt(punArray[i].length-1))%2===0){continue}
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
        if (punArray[i][Math.floor(punArray[i].length/2)+1]==='e'){continue}
        let lowerCaseCount = 0
        let capitalCount = 0
        for(let j=0;j<punArray[i].length;j++){
            if (punArray[i][j].charCodeAt(0)>=97&&punArray[i][j].charCodeAt(0)<=122){
                lowerCaseCount++
            }
            if (punArray[i][j].charCodeAt(0)>=65&&punArray[i][j].charCodeAt(0)<=90){
                capitalCount++
            }
        }
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
        if (lowerCaseCount%2!==0){continue}
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
        if (capitalCount<2){continue}
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
        if (punArray[i].includes('S')){continue}
finalArray.push(punArray[i])    
}
console.log(finalArray);
}
puns(str)
function dungeonestDark(input){
    let dog = `${input}`;
    let arr = dog.split('|');
    let temp = ``;
    let temp2 =[];
    let coins = 0;
    let health = 100;
    let i;
    let bestRoom = 0;
    for (i = 0; i < arr.length; i++) {
        bestRoom++;
        temp = arr[i];
        temp2 = temp.split(" ");
        if (temp2[0] === "potion") {
            if (health+Number(temp2[1]) > 100) {
                console.log(`You healed for ${Number(temp2[1]) - (health+Number(temp2[1])-100)} hp.`);
                health+= Number(temp2[1]) - (health+Number(temp2[1])-100);
            }else{
                health+=Number(temp2[1]);
                console.log(`You healed for ${temp2[1]} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        }else if (temp2[0] === "chest") {
            coins+=Number(temp2[1]);
            console.log(`You found ${temp2[1]} coins.`);
        }else{
            
            if (health > Number(temp2[1])) {
                
                health-=Number(temp2[1]);
                
                console.log(`You slayed ${temp2[0]}.`);
            }else{
                console.log(`You died! Killed by ${temp2[0]}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }   
        if (i === arr.length-1) {
            console.log(`You've made it!`);
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
       }
   }  
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
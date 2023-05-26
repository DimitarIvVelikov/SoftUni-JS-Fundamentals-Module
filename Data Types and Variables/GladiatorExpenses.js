function gladiatorExpenses(lostFights,helmP,swordP,shieldP,armorP) {
    let totalLoses = 0;
    let shieldBreakCounter = 0;
    let repairs = [0,0,0,0];
 for (let i = 1; i <= lostFights; i++) {
    totalLoses = i;
    if(shieldBreakCounter % 2 === 0){
        repairs[3]++;
    }
    if(totalLoses % 6 === 0){ repairs[0]++; repairs[1]++; repairs[2]++; }
    else if (totalLoses % 3 === 0) { repairs[1]++; }
    else if (totalLoses % 2 === 0 ) { repairs[0]++; }
 }
 let totalPrice= repairs[0]*helmP + repairs[1]*swordP + repairs[2]*shieldP + repairs[3]*armorP;

    console.log(`Gladiator expenses: ${totalPrice} aureus`);
}
gladiatorExpenses(7,2,3,4,5);
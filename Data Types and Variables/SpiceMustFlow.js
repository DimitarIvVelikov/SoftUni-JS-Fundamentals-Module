function spiceMustFlow(startingYield) {
    let currentYield = startingYield;
    let totalYield = 0;
    let days = 0;
    while(currentYield > 99){
        days++;
        totalYield+=currentYield;
        if (totalYield <= 26) {
            totalYield = 0;
        }else{
            totalYield-=26;
        }
        currentYield-=10;
        if (currentYield < 100) {
            if (totalYield <= 26) {
                totalYield = 0;
            }else{
                totalYield-=26;
            }
        }
    }
    console.log(days);
    console.log(totalYield);
}
spiceMustFlow(450);
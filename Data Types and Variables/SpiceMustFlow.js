function spiceMustFlow(startingYield) {
    let currentYield = startingYield;
    let CrewConsump = 26;
    let totalYield = 0;
    let days = 0;
    while(currentYield > 99){
        days++;
        totalYield+=currentYield;// totalYield = totalYield + currentYield;
        if (totalYield <= CrewConsump) {
            totalYield = 0;
        }else{
            totalYield-=CrewConsump;
        }
        currentYield-=10;// currentYield = currentYield- 10;
        if (currentYield < 100) {
            if (totalYield <= CrewConsump) {
                totalYield = 0;
            }else{
                totalYield-=CrewConsump;
            }
        }
    }
    console.log(days);
    console.log(totalYield);
}
spiceMustFlow(100);
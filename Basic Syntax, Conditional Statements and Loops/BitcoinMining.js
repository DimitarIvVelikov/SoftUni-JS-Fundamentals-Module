function bitcoinMining(input) {
    let bitcoinPrice = 11949.16;
    let goldPricePerGram = 67.51;
    let index = 0;
    let amountOfGold = input[index];
    index++;
    let daycounter = 1;
    let totalMoney = 0;
    let totalBitCoins = 0;
    let firstDay = 0;
    let isANumber = true;
    while(isANumber === true){
        if (daycounter % 3 === 0) {
            amountOfGold*=0.70;
        }
        totalMoney+=(amountOfGold*goldPricePerGram);
        if (totalMoney >= bitcoinPrice) {
         
            if (totalBitCoins === 0) {
                firstDay = daycounter;
            }
            totalBitCoins+=Math.floor(totalMoney / bitcoinPrice)
            totalMoney-=(Math.floor(totalMoney / bitcoinPrice)*bitcoinPrice);
        }
        amountOfGold = input[index];
        index++;
        daycounter++;
        if(isNaN(amountOfGold)){
            isANumber=false;
        }
    }
    console.log(`Bought bitcoins: ${totalBitCoins}`);
    if (totalBitCoins !== 0 ) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([50, 100])
bitcoinMining([3124.15,504.212,2511.124]);
bitcoinMining([100, 200, 300]);
function oddAndEvenSum(input) {
    let oddSum = 0;
    let evenSum = 0;
    let numbersArray = String(input).split("");
    for (let index = 0; index < numbersArray.length; index++) {
        if (numbersArray[index] % 2 === 0) {
            evenSum+=Number(numbersArray[index]);
        }else{
            oddSum+=Number(numbersArray[index]);
        }
        
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(oddAndEvenSum(1000435));
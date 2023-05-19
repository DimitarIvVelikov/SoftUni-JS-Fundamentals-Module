function printAndSum(firstNumber , secondNumber) {
    let sum = 0;
    let numbers = '';
    for (let index = firstNumber; index <= secondNumber; index++){
        sum += index;
        numbers += `${index} `;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
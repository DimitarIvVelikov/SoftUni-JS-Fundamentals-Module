function sumDigits(num){
    let numbers = String(num);
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum+=Number(numbers[index]);
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
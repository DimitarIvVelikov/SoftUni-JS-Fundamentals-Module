function triangleOfNumbers(number) {
    let buff = '';
    for (let index = 1; index <= number; index++) {
        buff = '';
        for (let index2 = 0; index2 < index; index2++) {
            buff+=`${index} `;
        }
        console.log(buff);
    }
}
triangleOfNumbers(3);
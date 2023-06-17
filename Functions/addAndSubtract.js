function addAndSubtract(firstN , secondN , thirdN) {

    function sum(firstN , secondN) {
        return firstN + secondN;
    }
    let sumResult = sum(firstN , secondN);
    function subtract( sum ,thirdN) {
        return sum -thirdN;
    }
    return subtract(sumResult , thirdN)
}
console.log(addAndSubtract(7,8,3));

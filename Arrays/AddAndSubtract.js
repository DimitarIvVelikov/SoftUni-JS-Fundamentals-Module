function addAndSubtract(data) {
    let sumBefore = 0;
    let sumAfter = 0;
    for (let index = 0; index < data.length; index++) {
        sumBefore += data[index];

        if (data[index] % 2 === 0) {
            data[index] += index;
        } else {
            data[index] -= index;
        }
        sumAfter += data[index];
    }
    console.log(data);
    console.log(sumBefore);
    console.log(sumAfter);
}
addAndSubtract([5, 15, 23, 56, 35]);
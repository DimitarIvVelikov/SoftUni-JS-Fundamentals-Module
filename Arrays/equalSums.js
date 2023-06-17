function equalSums(arr) {
    let specialNumber = false;
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < arr.length; i++) {// O(N)*O(N) = O(N^2) 
        for (let y = 0; y < i; y++) {
            leftSum += arr[y];
        }
        for (let z = i + 1; z < arr.length; z++) {
            rightSum += arr[z];
        }
        if (rightSum === leftSum) {
            console.log(i);
            specialNumber = true;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (!specialNumber) {
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
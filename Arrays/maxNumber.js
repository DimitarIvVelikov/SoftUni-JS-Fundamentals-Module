function maxNumber(arr) {
    let newArr = [];
    let isHighest = false;

    for (let i = 0; i < arr.length; i++) {
        isHighest = true;
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] <= arr[y]) {
                isHighest = false;
            }
        }
        if (isHighest) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
console.log(`------------------`);
maxNumber([14, 24, 3, 19, 15, 17]);
console.log(`------------------`);
maxNumber([41, 41, 34, 20]);
console.log(`------------------`);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

/// i = 0 y=1  1 > 4  =>y=2 1 > 3 =>y=3 1 > 2
/// i = 1 y=2  4 > 3 iH=1 => y=3 4> 2 iH=1 [4]
/// i = 2 y=3 3 > 2 iH=1 => [4,3]
/// i = 3 y=4
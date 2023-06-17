function arrayRotation(arr,n){
    let rotationStart = 0;
    let newArr =[];
    rotationStart = n;
        while (arr.length <= rotationStart) {
            rotationStart-=arr.length;
        }

    for (let i = 0; i < arr.length; i++) {
        
        newArr[i]= arr[rotationStart];
        rotationStart++;       
        if(rotationStart == arr.length){
            rotationStart = 0;
        }
    }
    console.log(newArr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
console.log(`------------------`);
arrayRotation([32, 21, 61, 1], 4);
console.log(`------------------`);
arrayRotation([2, 4, 15, 31], 5 );
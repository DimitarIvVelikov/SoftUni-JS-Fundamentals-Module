function  rounding(number,percision) {
    if(percision > 15){
        percision = 15;
    }
    let result = parseFloat(number.toFixed(percision));
    console.log(result);
}
rounding(3.1415926535897932384626433832795,2);